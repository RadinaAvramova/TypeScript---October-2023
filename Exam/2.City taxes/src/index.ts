function createRecord(name: string, population: number, treasury: number) {
    const obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: () => {
            obj.treasury += obj.population * obj.taxRate;
        },
        applyGrowth: (percent: number) =>  {
            obj.population += obj.population * percent / 100;
        },
        applyRecession: (percent: number)  => {
            obj.treasury -= obj.treasury * percent / 100;
        }

    };
     
    return obj;
}