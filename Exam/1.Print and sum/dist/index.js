function printAndSum(start, end) {
   let sum = 0;
   let numbers = '';
   for (let i = start; i <= end; i++) {
       numbers += i + ' ';
       sum += i;
   }
   return `${numbers}\nSum: ${sum}`;
}

// function printAndSum(n, m){

//    let sum = 0;

//    for (let i = n; i <= m; i++){

//       sum += i;

//       console.log(i);

//    }

//    console.log(`Sum: ${sum}`);

// }


// function printAndSum(start,end) {
//    let buffNumber = "";
//    let sum = 0;
//    for(let i = start; i <= end; i++) {
//        buffNumber += i + " ";
//        sum += i;
//    }
//    console.log(buffNumber.trim());
//    console.log("Sum: " + sum);
// }