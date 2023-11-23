"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Drink_1 = require("./Drink");
const Drink_2 = require("./Drink");
const Drink_3 = require("./Drink");
const Drink_4 = require("./Drink");
const Drink_5 = require("./Drink");
const Drink_6 = require("./Drink");
const Drink_7 = require("./Drink");

const VendingMashine_1 = require("./VendingMashine");
function main() {
    // Initialize the repository (Drink)

    const drink1 = new Drink_1.Drink("Tea", 1.5, 300);
    const drink2 = new Drink_2.Drink("Coffee", 2.0, 120);
    const drink3 = new Drink_3.Drink("Hot Chocolate", 2.5, 200);
    const drink4 = new Drink_4.Drink("Latte", 3.5, 220);
    const drink5 = new Drink_5.Drink("Cappuccino", 2.8, 180);
    const drink6 = new Drink_6.Drink("Mocha", 2.1, 150);
    const drink7 = new Drink_7.Drink("Herbal Tea", 1.75, 300);
  

    // Initialize entity (Vending Mashine)
    const vendingMashine = new VendingMashine_1.VendingMashine(6);

    //Get Count
    const getCount = vendingMashine.getCount();
    console.log(getCount?.toString());
    //console.log(vendingMachine.getCount());
    //0

    // Print Drink
    console.log(drink1.toString());
    console.log(drink2.toString());
    console.log(drink3.toString());
    console.log(drink4.toString());
    console.log(drink5.toString());
    console.log(drink6.toString());
    console.log(drink7.toString());


    // Add Drink
    vendingMashine.addDrink(drink1);
    vendingMashine.addDrink(drink2);
    vendingMashine.addDrink(drink3);
    vendingMashine.addDrink(drink4);
    vendingMashine.addDrink(drink5);
    vendingMashine.addDrink(drink6);
    vendingMashine.addDrink(drink7);

    //Try to add drinks when the capacity is full
    vendingMachine.addDrink(herbalTea);

    //Get Count
    console.log(vendingMachine.getCount());
    //6

    // Remove Drink
    console.log(vendingMashine.removeDrink("Herbal Tea")); // false
    console.log(vendingMashine.removeDrink("Tea")); // true

    // Get longest drink
    const longestDrink = vendingMashine.getlongestDrink();
    console.log(longestDrink?.toString());
    //console.log(vendingMachine.getLongest());
    //Name: Latte, Price: $3.5, Volume: 220 ml

    // Get cheapest drink
    const cheapestDrink = vendingMashine.getCheapestDrink();
    console.log(cheapestDrink?.toString());
    //console.log(vendingMachine.getCheapest())
    //Name: Coffee, Price: $2.0, Volume: 120 ml

    //Buy specific drink
    const buyDrink = vendingMashine.buyDrink();
    console.log(buyDrink?.toString());
    //console.log(vendingMachine.buyDrink("Cappuccino"))
    //Name: Cappuccino, Price: $2.8, Volume: 180 ml


    // // Get Drink
    // const getDrink = vendingMashine.getDrink("brown");
    // console.log(getDrink?.toString());

    //Drinks report
    console.log(vendingMashine.report());

    //Drinks available:
    //Name: Coffee, Price: $2.0, Volume: 120 ml
    //Name: Hot Chocolate, Price: $2.5, Volume: 200 ml
    //Name: Latte, Price: $3.5, Volume: 220 ml
    //Name: Cappuccino, Price: $2.8, Volume: 180 ml
    //Name: Mocha, Price: $2.1, Volume: 150 ml

}
main();