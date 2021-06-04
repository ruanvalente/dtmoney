import { useEffect } from "react";

import { Header } from "./components/Header";
import { DashBoard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/globalStyle";

import { dtMoneyService } from "./services/server";
import { api } from "./services/api";

dtMoneyService();

export function App() {
  useEffect(() => {
    api.get("transaction").then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}
