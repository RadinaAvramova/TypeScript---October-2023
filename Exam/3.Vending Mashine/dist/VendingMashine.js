"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMashine = void 0;
class VendingMashine {
    constructor(buttonCapacity, getCount) {
        this.buttonCapacity = buttonCapacity;
        this.getCount = getCount;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.getCount) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((c) => c.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }

    getLongestDrink() {
        const longestDrink = [...this.drinks].sort((a, b) => a.size - b.size)[0];
        return longestDrink;
    }

    getCheapestDrink() {
        const cheapestDrink = [...this.drinks].sort((a, b) => a.size - b.size)[0];
        return cheapestDrink;
    }

    buyDrink() {
        const buyDrink = [...this.drinks].sort((a, b) => a.size - b.size)[0];
        return buyDrink;
    }

    report() {
        const sortedDrinks = [...this.drinks].sort((a, b) => a.size - b.size);
        const drinksForReport = sortedDrinks.map((c) => c.toString()).join("\n");
        const report = `${this.buttonCapacity} Drinks available:\n${drinksForReport}`;
        return report;
    }
}
exports.VendingMashine = VendingMashine;