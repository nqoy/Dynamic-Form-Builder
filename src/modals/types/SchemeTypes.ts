export enum SchemeFieldType {
  INPUT = "input",
  SELECT = "select",
  TEXTAREA = "textarea",
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

export interface SchemeFormFieldOption {
  key: string;
  value: string;
}

export interface SchemeFormFieldModal {
  type: SchemeFieldType;
  label: string;
  options?: SchemeFormFieldOption[];
  rules: SchemeFieldRules;
}

export interface FormScheme {
  title: string;
  fields: SchemeFormFieldModal[];
}
