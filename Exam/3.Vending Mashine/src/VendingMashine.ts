import { Drink } from "./Drink";
import { VendingMashine } from "./VendingMashine";

export class VendingMachine {
  buttonCapacity: number;
  getCount: number;
  drinks: Drink[];

  constructor(buttonCapacity : number, getCount: number) {
    this.buttonCapacity = buttonCapacity;
    this.getCount = getCount;
    this.drinks = [];
  }

  addDrink(drink: Drink): void {
    if (this.drinks.length < this.getCount) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex((c) => c.name === name);

    if (index !== -1) {
      this.drinks.splice(index, 1);
      return true;
    }

    return false;
  }

  getLongestDrink(): Drink {
    const longestDrink = [...this.drinks].sort((a, b) => a.size - b.size)[0];
    return longestDrink;
  }

  getCheapestDrink(): Drink {
    const cheapestDrink = [...this.drinks].sort((a, b) => a.size - b.size)[0];
    return cheapestDrink;
  }

  buyDrink():Drink {
    const buyDrink = [...this.drinks].sort((a, b) => a.size - b.size)[0];
    return buyDrink;
}

  report(): string {
    const sortedDrinks = [...this.drinks].sort((a, b) => a.size - b.size);
    const drinksForReport = sortedDrinks.map((c) => c.toString()).join("\n");

    const report = `${this.buttonCapacity} Drinks available:\n${drinksForReport}`;
    return report;
  }
}