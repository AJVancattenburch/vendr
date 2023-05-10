import { appState } from "../AppState.js"
import { snackService } from "../Services/SnackService.js"
import { setHTML } from "../Utils/Writer.js";
// import { loadState } from "../Utils/Store.js";

function _drawSnacks() {
  console.log('drawing snack')
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(s => template += s.ListTemplate)
  setHTML('snack', template)
}

function _drawActive() {
  console.log('drawing active')
  let activeSnack = appState.activeSnack
  // setHTML('active', ActiveTemplate)
}

function _drawMySnack() {
  console.log('🍊')
  let mySnack = appState.mySnack
  // let template = ''
  // mySnack.forEach(s => template += s.ListTemplate)
  // setHTML('mySnack', template)
}

export class SnacksController {
  constructor() {
    console.log('hello from the snacks controller')
    _drawActive()
    _drawMySnack()
    _drawSnacks()


    appState.on('activeSnack', _drawActive)
    appState.on('mySnack', _drawMySnack)
  }
  setActive(snackName) {
    snackService.setActive(snackName)
  }

  // dispense() {
  //   console.log('dispensing snack')
  //   snackService.dispense()
  // }
  }

