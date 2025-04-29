import { SchemeFormFieldModal, FormScheme } from "./types/SchemeTypes";
import { RegisterOptions } from "react-hook-form";

export class DynamicForm {
  title: string;
  fields: SchemeFormFieldModal[];

  constructor({ title, fields }: FormScheme) {
    this.title = title;
    this.fields = fields;
  }

  getValidationRules(): Record<string, RegisterOptions> {
    const rules: Record<string, RegisterOptions> = {};

    this.fields.forEach((field) => {
      const fieldName = field.label;
      const fieldRules: RegisterOptions = {};

      if (field.rules?.required?.value) {
        fieldRules.required =
          field.rules.required.error_message || "This field is required.";
      }

      if (typeof field.rules?.min?.value === "number") {
        fieldRules.minLength = {
          value: field.rules.min.value,
          message:
            field.rules.min.error_message?.replace(
              "{{value}}",
              field.rules.min.value.toString()
            ) || `Minimum length is ${field.rules.min.value}`,
        };
      }

      if (typeof field.rules?.max?.value === "number") {
        fieldRules.maxLength = {
          value: field.rules.max.value,
          message:
            field.rules.max.error_message?.replace(
              "{{value}}",
              field.rules.max.value.toString()
            ) || `Maximum length is ${field.rules.max.value}`,
        };
      }

      if (typeof field.rules?.regex?.value === "string") {
        fieldRules.pattern = {
          value: new RegExp(field.rules.regex.value),
          message: field.rules.regex.error_message || "Invalid format.",
        };
      }

      rules[fieldName] = fieldRules;
    });

    return rules;
  }
}
