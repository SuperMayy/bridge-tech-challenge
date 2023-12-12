import './App.css'
import React from 'react';
import MainLayout from "./components/layouts/MainLayout";
import SelectRequirements from "./components/templates/SelectRequirements";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <SelectRequirements />
      </MainLayout>
    </div>
  );
}

export default App;
