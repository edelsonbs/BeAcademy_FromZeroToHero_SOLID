// Single reponsability principle
// Criar uma classe para cada regra de negócio/responsabilidade

class WeighAdviser {
    constructor(user, weight) {
        this.user = user,
            this.weight = weight
    }

    adviser(expectedWeight) {
        if (this.weight >= expectedWeight) {
            weightAlert(this.user)
        }
    }
}

function weightAlert(user) {
    console.log(`${user} está acima do peso`)
}

const marcelo = new WeighAdviser('Marcelo', 91)
marcelo.adviser(90)
