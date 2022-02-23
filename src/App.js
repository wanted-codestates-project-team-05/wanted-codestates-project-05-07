import React from "react";
import "./App.css";
import "./reset.css";
import AddressInput from "./components/createdForm/AddressInput";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import SubForm from "./components/createdForm/SubForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SubForm />
      {/*<AddressInput />*/}
    </ThemeProvider>
  );
}

export default App;
