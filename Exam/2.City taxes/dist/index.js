function createRecord(name, population, treasury) {
    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: () => {
            obj.treasury += obj.population * obj.taxRate;
        },
        applyGrowth: (percent) =>  {
            obj.population += obj.population * percent / 100;
        },
        applyRecession: (percent)  => {
            obj.treasury -= obj.treasury * percent / 100;
        }

    };
     
    return obj;
}

// const city = cityTaxes('Tortuga',7000,15000);

// console.log(city);

// const city = cityTaxes('Tortuga',7000,15000);

// city.collectTaxes();

// console.log(city.treasury);

// city.applyGrowth(5);

// console.log(city.population);