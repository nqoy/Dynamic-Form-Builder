import { FormScheme } from "../modals/types/SchemeTypes";
import { DynamicForm } from "../modals/DynamicForm";

export async function fetchFormSchema(url: string): Promise<DynamicForm> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch form schema: ${response.status}`);
    }

    const parsedRes = await response.json();

    if (!Array.isArray(parsedRes) || parsedRes.length === 0) {
      throw new Error("Received invalid or empty form schema");
    }

    const formScheme = parsedRes[0] as FormScheme;

    return new DynamicForm(formScheme);
  } catch (error) {
    console.error("Error fetching form schema:", error);
    throw error;
  } finally {
    console.log("Fetch attempt finished.");
  }
}
