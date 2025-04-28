export enum SchemeFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  INPUT_NUMBER = "input_number",
}

export interface RequiredFieldRule {
  value: boolean;
  error_message: string;
}

export interface MinMaxFieldRule {
  value: number;
  error_message: string;
}

export interface RegexFieldRule {
  value: string;
  error_message: string;
}

export interface SchemeFieldRules {
  required?: RequiredFieldRule;
  min?: MinMaxFieldRule;
  max?: MinMaxFieldRule;
  regex?: RegexFieldRule | null;
}

export interface SchemeFormField {
  type: SchemeFieldType;
  label: string;
  options?: Record<string, string>;
  rules: SchemeFieldRules;
}

export interface FormScheme {
  title: string;
  fields: SchemeFormField[];
}
