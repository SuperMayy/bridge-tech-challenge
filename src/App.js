import './App.css'
import React from 'react';
import MainLayout from "./components/layouts/MainLayout";
import SelectRequirements from "./components/templates/SelectRequirements";
import InputValues from './components/templates/InputValues';
import Results from './components/templates/Results';

function App() {
  return (
    <div className="App">
      <MainLayout>
        {/* <SelectRequirements /> */}
        {/* <InputValues 
          question="What is your approximate annual Spend on industrial items"
          QuestionNumber={1}
        /> */}
        <Results />
      </MainLayout>
    </div>
  );
}

export default App;
