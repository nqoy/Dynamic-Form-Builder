import { SchemeFormField, FormScheme } from "./types/SchemeTypes";

export class DynamicForm {
  title: string;
  fields: SchemeFormField[];

  constructor({ title, fields }: FormScheme) {
    this.title = title;
    this.fields = fields;
  }
}
