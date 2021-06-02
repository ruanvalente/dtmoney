import { createServer } from "miragejs";

export function dtMoneyService() {
  createServer({
    routes() {
      this.get("/api/transactions", () => ({
        transactions: [
          {
            id: Math.random(),
            title: "Desenvolvimento de site",
            amount: 12000,
            category: "Venda",
            date: new Date().toISOString(),
          },

          {
            id: Math.random(),
            title: "Hamburguer",
            amount: 59.0,
            category: "Alimentação",
            date: new Date().toISOString(),
          },

          {
            id: Math.random(),
            title: "Aluguel do apartamento",
            amount: 12000,
            category: "Casa",
            date: new Date().toISOString(),
          },

          {
            id: Math.random(),
            title: "Computador",
            amount: 5400,
            category: "Venda",
            date: new Date().toISOString(),
          },
        ],
      }));
    },
  });
}
