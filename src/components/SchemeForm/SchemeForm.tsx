import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { DynamicForm } from "../../modals/DynamicForm";
import { SchemeFormFieldModal } from "../../modals/types/SchemeTypes";
import SchemeFormField from "../SchemeField/SchemeField";
import "./SchemeForm.css";

interface SchemeFormProps {
  formSchema: DynamicForm;
}

const SchemeForm: React.FC<SchemeFormProps> = ({ formSchema }) => {
  const fields = formSchema.fields;
  const validationRules = formSchema.getValidationRules();
  const defaultValues: Record<string, unknown> = {};

  for (const field of fields) {
    defaultValues[field.label] = "";
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Record<string, unknown>>({
    mode: "onChange",
    defaultValues,
  });

  const onSubmit: SubmitHandler<Record<string, unknown>> = (data) => {
    console.log(data);
  };

  return (
    <div className="scheme-form-container glass">
      <h2 className="scheme-form-title">{formSchema.title}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="scheme-form">
        {fields.map((field: SchemeFormFieldModal) => (
          <div className="scheme-form-field" key={field.label}>
            <Controller
              name={field.label}
              control={control}
              rules={validationRules[field.label]}
              render={({ field: { onChange, value } }) => (
                <SchemeFormField
                  field={field}
                  value={value as string}
                  onChange={onChange}
                  errors={errors}
                />
              )}
            />
          </div>
        ))}

        <div className="scheme-form-actions">
          <button
            type="submit"
            className="scheme-submit-button"
            disabled={!isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchemeForm;
