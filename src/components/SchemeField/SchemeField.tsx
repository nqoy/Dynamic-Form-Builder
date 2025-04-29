import React, { useState } from "react";
import {
  SchemeFormFieldModal,
} from "../../modals/types/SchemeTypes";
import { FieldErrors } from "react-hook-form";
import "./SchemeField.css";
import SchemeFieldRenderer  from "./SchemeFieldRenderer";

interface SchemeFieldProps {
  field: SchemeFormFieldModal;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  errors: FieldErrors<Record<string, unknown>>;
}

const SchemeFormField: React.FC<SchemeFieldProps> = ({
  field,
  value,
  onChange,
  errors,
}) => {
  const fieldName = field.label;
  const hasError = !!errors?.[fieldName];
  const errorMessage = errors?.[fieldName]?.message as string | undefined;

  const [isFocused, setIsFocused] = useState(false);

  const getFieldClassNames = () => {
    let classNames = "scheme-field-control";

    if (hasError) classNames += " scheme-field--error";
    if (isFocused) classNames += " scheme-field--focus";

    return classNames;
  };

  return (
    <div className="scheme-field">
      <label htmlFor={fieldName} className="scheme-field-label">
        <span className="label-text">
          {field.label}
          {field.rules?.required?.value && (
            <span className="scheme-field-required-mark">*</span>
          )}
        </span>
        {hasError && (
          <span className="scheme-field-inline-error">
            {errorMessage || "Invalid input"}
          </span>
        )}
      </label>

      <div className="scheme-field-input">
        <SchemeFieldRenderer 
          field={field}
          fieldName={fieldName}
          value={value}
          className={getFieldClassNames()}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SchemeFormField;
