import { Value } from "./Models/Value.js"
import { Snack } from "./Models/Vendr.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

/**  @type {import('./Models/Vendr').Snack[]} */
snack = [
  new Snack ({name: 'Orange', price: 3.50, img: 'orange.gif'})
]

/** @type {import('./Models/Vendr').Snack|null} */
activeSnack = [ 
  snack ({name: 'Orange', price: 3.50, img: 'http://images6.fanpop.com/image/photos/34500000/Orange-Fruit-orange-34512881-2260-2175.jpg'})
]

activeSnack = null

/** @type {import ( './Controllers/SnacksController' ).Vendr[]} */
mySnack = loadState('mySnack', [Snack])
/** @type {number} */
coins = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
