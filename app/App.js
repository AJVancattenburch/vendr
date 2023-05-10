import { SnacksController } from "./Controllers/SnacksController.js";
import { CoinsController } from "./Controllers/CoinsController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController();
  coinsController = new CoinsController();
}

window["app"] = new App();
