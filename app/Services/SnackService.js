import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { coinsService } from "./CoinsService.js";

class SnackService {

setActive(SnackName) {
  console.log(SnackName, 'setting active in the service')
  let foundSnack = appState.snack.find(s => s.name == SnackName)
  console.log(foundSnack)

}
}

export const snackService = new SnackService()