import React from "react";
import {
  SchemeFormFieldModal,
  SchemeFieldType,
  SchemeFormFieldOption,
} from "../../modals/types/SchemeTypes";

interface SchemeFieldRendererProps {
  field: SchemeFormFieldModal;
  fieldName: string;
  value: string;
  className: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const SchemeFieldRenderer: React.FC<SchemeFieldRendererProps> = ({
  field,
  fieldName,
  value,
  className,
  onChange,
  onFocus,
  onBlur,
}) => {
  
  const commonProps = {
    id: fieldName,
    className,
    value,
    onChange,
    onFocus,
    onBlur,
  };

  switch (field.type) {
    case SchemeFieldType.INPUT:
      return <input {...commonProps} />;

    case SchemeFieldType.TEXTAREA:
      return <textarea {...commonProps} />;

    case SchemeFieldType.SELECT:
      return (
        <select {...commonProps}>
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
      return <input type="number" {...commonProps} />;

    default:
      return null;
  }
};

export default SchemeFieldRenderer;
