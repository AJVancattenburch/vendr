import { appState } from "../AppState.js";


export class CoinsService {

  addCoin() {
    appState.coins++
    console.log('adding coins', appState.coins)
  }

  decreaseCoin() {
    appState.coins--
  }
}

export const coinsService = new CoinsService