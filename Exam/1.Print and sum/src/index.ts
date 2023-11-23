function printAndSum(start: number, end: number): string {
    let sum: number = 0;
    let numbers: string = '';
    for (let i: number = start; i <= end; i++) {
        numbers += i + ' ';
        sum += i;
    }
    return `${numbers}\nSum: ${sum}`;
}

// function printAndSum(n: number, m: number): void {

//     let sum: number = 0;
 
//     for (let i: number = n; i <= m; i++){
//        sum += i;
 
//        console.log(i);
 
//     }
 
//     console.log(`Sum: ${sum}`);
 
//  }


//  function printAndSum(start: number, end: number): void {
//     let buffNumber: string = "";
//     let sum: number = 0;
//     for(let i: number = start; i <= end; i++) {
//         buffNumber += i + " ";
//         sum += i;
//     }
//     console.log(buffNumber.trim());
//     console.log("Sum: " + sum);
// }

