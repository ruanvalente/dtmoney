import { useEffect } from "react";

import { dtMoneyService } from "./services/server";

import { Header } from "./components/Header";
import { DashBoard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/globalStyle";

dtMoneyService();

export function App() {
  useEffect(() => {
    fetch("htpp://localhost:3000/api/v1/transaction")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}
