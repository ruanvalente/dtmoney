import { createServer, Model } from "miragejs";
import transactions from "../transactions.json";
// import faker from "faker";

export function dtMoneyService() {
  createServer({
    models: {
      // transaction: Model,
      transaction: Model,
    },

    // factories: {
    //   transaction: Factory.extend({
    //     title() {
    //       return faker.fake("{{commerce.product}}");
    //     },
    //     description() {
    //       return faker.fake("{{commerce.productDescription}}");
    //     },

    //     category() {
    //       return faker.fake("{{commerce.department}}");
    //     },

    //     amount() {
    //       return faker.fake("{{commerce.price}}");
    //     },

    //     date() {
    //       return faker.fake("{{datatype.datetime}}");
    //     },
    //   }),
    // },

    seeds(server) {
      // server.createList("transaction", 10);
      server.loadFixtures();
    },

    fixtures: {
      transactions,
    },

    routes() {
      this.namespace = "api";

      this.get("v1/transaction", (scheme) => scheme.db.transactions);
    },
  });
}
