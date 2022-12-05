// Dependency Inversion Principle
// Código desacoplado

class Store {
    // constructor() {
    //     this.creditCard = new Visa()
    // }

    constructor(brand) {
        this.paymentProcess = new PaymentProcess(brand)
    }
}

class PaymentProcess {
    constructor(brand) {
        this.brand = brand
    }

    payment() {
        console.log(`Pagou com ${this.brand}`)
    }
}

// class Visa {
//     constructor() {
//         this.brand = 'Visa'
//     }
// }

const bike = new Store(new PaymentProcess('Visa').payment())
