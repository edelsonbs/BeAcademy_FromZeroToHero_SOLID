// Liskov Substitution Principle
// A ideia principal do princípio de substituição de Liskov é que qualquer função/módulo que interaja com uma classe também deve ser capaz de interagir com todas as subclasses dessa classe.
// Isso significa essencialmente que uma classe é intercambiável com suas subcalsses.

class FlyingBirds {
    fly() {
        console.log('Posso voar')
    }
}

class SwimmingBird {
    swim() {
        console.log('Posso nadar')
    }
}

class Peguin extends SwimmingBird {}
class Duck extends FlyingBirds {}

function makeFlyingBirdFly(bird) {
    bird.fly()
}

function makeSwimmingBridSwim(bird) {
    bird.swim()
}

const pato = new Duck()
const pinguim = new Peguin()

makeFlyingBirdFly(pato)
makeSwimmingBridSwim(pinguim)
