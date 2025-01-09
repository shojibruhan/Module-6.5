// const number= 1;

// if(number%2==0) console.log("Even Number");
// else console.log("Odd Number")

const oddEven =(number)=>
{
    if(typeof number != 'number') return console.log("Invalid Input");
    if(number%2==0) console.log("Even Number");
    else console.log("Odd Number");
}


oddEven(3);