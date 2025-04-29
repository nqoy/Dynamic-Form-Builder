import React, { useEffect, useState } from "react";
import { fetchFormSchema } from "../../services/SchemeService";
import { DynamicForm } from "../../modals/DynamicForm";
import SchemeForm from "../SchemeForm/SchemeForm";

const baseUrl = import.meta.env.VITE_API_URL;

const DynamicFormContainer: React.FC = () => {
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

  return <SchemeForm formSchema={dynamicForm} />;
};

export default DynamicFormContainer;
