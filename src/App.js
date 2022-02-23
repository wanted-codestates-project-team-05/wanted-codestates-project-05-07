import React from "react";
import "./App.css";
import "./reset.css";
import CreatedForm from "./components/createdForm/CreatedForm";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*<SubForm />*/}
      <CreatedForm />
    </ThemeProvider>
  );
}

export default App;
