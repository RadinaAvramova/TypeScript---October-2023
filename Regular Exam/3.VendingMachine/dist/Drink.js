"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    constructor(name, price, volume) {
        this.name = name,
            this.price = price,
            this.volume = volume;
    }
    toString() {
        return `Name: ${this.name}, Price: $${this.price.toFixed(2)}, Volume: ${this.volume} ml`;
    }
}
exports.Drink = Drink;
