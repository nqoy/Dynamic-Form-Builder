import React, { useEffect, useState } from "react";
import { fetchFormSchema } from "./services/SchemeService";
import { DynamicForm } from "./modals/DynamicForm";
import SchemeForm from "./components/SchemeForm/SchemeForm"; // Import the SchemeForm
import "./styles/global.css";
import "./styles/variables.css";

const baseUrl = import.meta.env.VITE_API_URL;

const App: React.FC = () => {
  const [dynamicForm, setDynamicForm] = useState<DynamicForm | null>(null);

  useEffect(() => {
    const loadFormSchema = async () => {
      const rawSchema = await fetchFormSchema(baseUrl);
      const form = new DynamicForm(rawSchema);
      setDynamicForm(form);
    };

    loadFormSchema();
  }, []);

  if (!dynamicForm) return <div>Loading...</div>;

  return (
    <div className="app-container">
      <h1>Form Submission</h1>
      <SchemeForm formSchema={dynamicForm} />
    </div>
  );
};

export default App;
