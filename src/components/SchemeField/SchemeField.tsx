import React, { useState } from "react";
import {
  SchemeFormFieldModal,
  SchemeFieldType,
  SchemeFormFieldOption,
} from "../../modals/types/SchemeTypes";
import { FieldErrors } from "react-hook-form";
import "./SchemeField.css";

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

  const renderField = () => {
    switch (field.type) {
      case SchemeFieldType.INPUT:
        return (
          <input
            id={fieldName}
            className={getFieldClassNames()}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );

      case SchemeFieldType.TEXTAREA:
        return (
          <textarea
            id={fieldName}
            className={getFieldClassNames()}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );

      case SchemeFieldType.SELECT:
        return (
          <select
            id={fieldName}
            className={getFieldClassNames()}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            <option value="">Select {field.label}</option>
            {Array.isArray(field.options) &&
              field.options.map((option: SchemeFormFieldOption, index) => (
                <option key={index} value={option.value}>
                  {option.key}
                </option>
              ))}
          </select>
        );

      case SchemeFieldType.INPUT_NUMBER:
        return (
          <input
            id={fieldName}
            type="number"
            className={getFieldClassNames()}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="scheme-field">
      <label htmlFor={fieldName} className="scheme-field-label">
        {field.label}
        {field.rules?.required?.value && (
          <span className="scheme-field-required-mark">*</span>
        )}
      </label>

      <div className="scheme-field-input">
        {renderField()}

        {hasError && (
          <div className="scheme-field-error">
            {errorMessage || "Invalid input"}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemeFormField;
