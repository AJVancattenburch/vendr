export class Snack {

  constructor(data) {
    
    this.name = data.name
    this.price = data.price
    this.img = data.img || 'http://images6.fanpop.com/image/photos/34500000/Orange-Fruit-orange-34512881-2260-2175.jpg'
  }

  get ListTemplate() {
    return `
    <div class="col-1 selectable text-center" width="200px" height="200px" onclick="app.SnacksController(${this.name})">
      <h1 h1 title = "${this.name}" > ${this.img}</h1>
    </div>
    <span id="coins"></span>
    `

    setHTML()
  }
  get ActiveTemplate() {
    // NOTE "get" or "getters" (also "set" and "setters") essentially get or set a specified property. They pull information from the left-hand side of an argument
    return `

      <div class="col-8">
        <div onclick="app.snacksController.setActive()" class="elevation-5 rounded text-center p-3">
          <h1 class="snack">${this.img}</h1>
          <h2>${this.name}</h2>
          <h3>Price: $ ${this.price}</h3>
        </div>
      </div>`
  }

}

