import { assign, createMachine } from "xstate";

export const machine = createMachine({
  id: "questionnaire",
  preserveActionOrder: true,
  predictableActionArguments: true,
  initial: "selectRequirements",
  context: {
    questionOne: null,
    questionTwo: null,
    questionThree: null,
    identityRequirement: 0,
    requestQuotation: 0,
    findProducts: 0,
    raiseOrder: 0,
    authoriseSale: 0,
    payProvider: 0,
    deliverProduct: 0,
    invoiceCheck: 0,
    placeOrder: 0,
    totalCount: 0,
    suplierAndProduct: 0,
    quotationToOrderProcess: 0,
    expeditingAndRecivingOrders: 0,
    processingInvoices: 0,
    payingSuppliers: 0,
    firstPageTotal: 0,
    totalProcessCost: 0,
    errorName: null,
  },
  states: {
    selectRequirements: {
      on: {
        IDENTITY_REQUIRMENTS_SELECTED: { 
          actions: [
            assign({identityRequirement: (ctx) => ctx.event.data })
          ]
        },
        RAISE_ORDER_SELECTED: { 
          actions: assign({
            raiseOrder: (ctx) => ctx.event.data })
        },
        DELIVERY_PRODUCT_SELECTED: { 
          actions: assign({
            deliverProduct: (ctx) => ctx.event.data })
        },
        REQUEST_QUOTATION_SELECTED: {
          actions: assign({
            requestQuotation: (ctx) => ctx.event.data })
        },
        AUTHORISE_SALE_SELECTED: {
          actions: assign({
            authoriseSale: (ctx) => ctx.event.data })
        },
        INVOICE_CHECK_SELECTED: {
          actions: assign({
            invoiceCheck: (ctx) => ctx.event.data })
        },
        FIND_PRODUCTS_SELECTED: {
          actions: assign({
            findProducts: (ctx) => ctx.event.data })
        },
        PAY_PROVIDER_SELECTED: {
          actions: assign({
            payProvider: (ctx) => ctx.event.data })
        },
        PLACE_ORDER_SELECTED: {
          actions: assign({
            placeOrder: (ctx) => ctx.event.data })
        },
        FIRST_PAGE_TOTAL: {
          actions: assign({
            firstPageTotal: (ctx) => {
            return ctx.context.identityRequirement +
            ctx.context.requestQuotation +
            ctx.context.findProducts +
            ctx.context.raiseOrder +
            ctx.context.authoriseSale +
            ctx.context.payProvider +
            ctx.context.deliverProduct +
            ctx.context.invoiceCheck +
            ctx.context.placeOrder;
          }
        })
        },
        CONTINUE: { target: "inputAnnualSpend" },
        ERROR: {
          target: "selectRequirements",
          actions: ["displayError"],
        },
      },
    },
    inputAnnualSpend: {
      on: {
        CONTINUE: { 
          target: "uniquePurchasePerAnnum",
          actions: assign({
            questionOne: (ctx) => ctx.event.data
          })
        },
        BACK: { target: "selectRequirements" },
      },
    },
    uniquePurchasePerAnnum: {
      on: {
        CONTINUE: { 
          target: "numberOfIndustrialSuppliers",
          actions: assign({
            questionTwo: (ctx) => ctx.event.data
          })
        },
        BACK: { target: "inputAnnualSpend" },
      },
    },
    numberOfIndustrialSuppliers: {
      on: {
        CONTINUE: { 
        target: "results",
        actions: assign({
          questionThree: (ctx) => ctx.event.data
        }),
      },
      BACK: { target: "uniquePurchasePerAnnum" },
    },
    },
    results: {
      on: {
        CALCULATE_RESULTS: {
          actions: assign({
            suplierAndProduct: (ctx) => (ctx.context.identityRequirement + ctx.context.requestQuotation) * ctx.context.questionTwo,
            quotationToOrderProcess: (ctx) => {
              return (ctx.context.findProducts + ctx.context.raiseOrder + ctx.context.authoriseSale + ctx.context.payProvider) * ctx.context.questionTwo
            },
            expeditingAndRecivingOrders: (ctx) => ctx.context.deliverProduct * ctx.context.questionOne,
            processingInvoices: (ctx) => ctx.context.invoiceCheck * ctx.context.questionTwo,
            payingSuppliers: (ctx) => ctx.context.placeOrder * ctx.context.questionThree,
            totalProcessCost: (ctx) => {
              return ctx.context.suplierAndProduct +
              ctx.context.quotationToOrderProcess +
              ctx.context.expeditingAndRecivingOrders +
              ctx.context.processingInvoices +
              ctx.context.payingSuppliers;
            },
          }),
        },
        SEND_REPORT: { 
          target: "final",
        },
        BACK: { target: "numberOfIndustrialSuppliers" },
      },
    },
    final: {
      on: {
        RESET: { 
          target: "selectRequirements",
          actions: () => window.location.reload()
        },
      },
    },
  },
});