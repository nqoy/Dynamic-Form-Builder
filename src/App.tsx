import React from "react";
import DynamicFormContainer from "./components/DynamicFormContainer/DynamicFormContainer";
import "./styles/global.css";
import "./styles/variables.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <DynamicFormContainer />
    </div>
  );
};

export default App;