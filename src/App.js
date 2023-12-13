import './App.css'
import React from 'react';
import MainLayout from "./components/layouts/MainLayout";
import SelectRequirements from "./components/templates/SelectRequirements";
import InputValues from './components/templates/InputValues';
import LoadingScreen from './components/templates/LoadingScreen';
import Results from './components/templates/Results';
import Final from './components/templates/Final';
import { useMachine } from '@xstate/react';
import { machine } from './machine';

function App() {
  const [current, send] = useMachine(machine);
  const { 
    requestQuotation, 
    identityRequirement, 
    findProducts, 
    raiseOrder, 
    authoriseSale, 
    payProvider, 
    deliverProduct, 
    invoiceCheck, 
    placeOrder,
    suplierAndProduct,
    quotationToOrderProcess,
    expeditingAndRecivingOrders,
    processingInvoices,
    payingSuppliers,
    totalProcessCost,
    firstPageTotal
  } = current.context;
  const next = (value) => send({ type: 'CONTINUE', data: value});
  const back = () => send({ type: 'BACK'});
  const sendReport = () => send({ type: 'SEND_REPORT'});
  const reset = () => send({ type: 'RESET'})
  const setIdentityRequirement = (event, value) => send({type: event, data: value});
  const finishLoading = () => send({ type: 'LOADED'});
  const calculateFirstPageTotal = () => send({ type: 'FIRST_PAGE_TOTAL'});
  const calculateResults = () => send({ type: 'CALCULATE_RESULTS'});

  return (
    <div className="App">
      <MainLayout isResultPage={current.matches('results')}>
        {current.matches('selectRequirements') && <SelectRequirements 
        next={next} 
        setIdentityRequirement={(event, value) => setIdentityRequirement(event, value)}
        identityRequirement={identityRequirement}
        requestQuotation={requestQuotation}
        findProducts={findProducts}
        raiseOrder={raiseOrder}
        authoriseSale={authoriseSale}
        payProvider={payProvider}
        deliverProduct={deliverProduct}
        invoiceCheck={invoiceCheck}
        placeOrder={placeOrder}
        calculateFirstPageTotal={calculateFirstPageTotal}
        firstPageTotal={firstPageTotal}
        />}
        {current.matches('inputAnnualSpend') && <InputValues 
          question="What is your approximate annual Spend on industrial items?"
          QuestionNumber={1}
          next={(value) => next(value)}
          back={back}
        />}
        {current.matches('uniquePurchasePerAnnum') && <InputValues 
          question="Approximately how many unique purchase orders are raised per annum for these items?"
          QuestionNumber={2}
          next={(value) => next(value)}
          back={back}
        />}
        {current.matches('numberOfIndustrialSuppliers') && <InputValues 
          question="Approximately how many suppliers are you using for industrial supplies?"
          QuestionNumber={3}
          next={(value) => next(value)}
          back={back}
        />}
        {current.matches('loading') && <LoadingScreen finishLoading={finishLoading}/>}
        { current.matches('results') && <Results back={back} sendReport={sendReport}
          calculateResults={calculateResults}
          suplierAndProduct={suplierAndProduct}
          quotationToOrderProcess={quotationToOrderProcess}
          expeditingAndRecivingOrders={expeditingAndRecivingOrders}
          processingInvoices={processingInvoices}
          payingSuppliers={payingSuppliers}
          totalProcessCost={totalProcessCost}
        />}
        { current.matches('final') && <Final reset={reset} />}
      </MainLayout>
    </div>
  );
}

export default App;
