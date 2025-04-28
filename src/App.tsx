/* eslint-disable no-debugger */
import "./styles/global.css";
import "./styles/variables.css";
import { fetchFormSchema } from "./services/SchemeService";

const baseUrl = import.meta.env.VITE_API_URL;

async function App() {
  const dynamicForm = await fetchFormSchema(baseUrl);

  console.log(dynamicForm);
  debugger;
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
