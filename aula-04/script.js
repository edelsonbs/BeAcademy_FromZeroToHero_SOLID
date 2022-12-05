// Interface Segregation Principle
// A ideia é segregar as interfaces e deixá-las menores.
// Pode ser aplicado mesmo não tendo interfaces no JavaScript, utilizando classes e herança.

class ProductsEntity {
    constructor(name, dept) {
        this.name = name
        this.dept = dept
    }
}

class TecProducts extends ProductsEntity {
    constructor(name, dept) {
        super(name, dept)
    }
}

class FoodProducts extends ProductsEntity {
    constructor(name, dept, validDate) {
        super(name, dept)
        this.validDate = validDate
    }
}

const xbox = new TecProducts('XBox', 'Tecnologia')
const pipoca = new FoodProducts('Pipoca','Alimentícios','NOV/2023')

console.log(xbox)
console.log(pipoca)
