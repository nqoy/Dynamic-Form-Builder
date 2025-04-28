import React, { useEffect, useState } from "react";
import { fetchFormSchema } from "./services/SchemeService";
import { SchemeFormFieldModal } from "./modals/types/SchemeTypes";
import { useForm, Controller } from "react-hook-form";
import SchemeFormField from "./components/SchemeField/SchemeField";
import "./styles/global.css";
import "./styles/variables.css";

const baseUrl = import.meta.env.VITE_API_URL;

const App: React.FC = () => {
  const [dynamicForm, setDynamicForm] = useState<SchemeFormFieldModal[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const loadFormSchema = async () => {
      const formSchema = await fetchFormSchema(baseUrl);
      setDynamicForm(formSchema.fields);
    };

    loadFormSchema();
  }, []);

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <h1>Form Submission</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {dynamicForm.map((field, index) => (
          <Controller
            key={index}
            name={`field_${index}`}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <SchemeFormField
                field={field}
                fieldIndex={index}
                value={value}
                onChange={onChange}
                errors={errors}
              />
            )}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
