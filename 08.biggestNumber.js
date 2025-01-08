const biggestNumber = (numberArray) =>
{
    for(let i=0; i<numberArray.length-1; i++)
    {
        bigNum= numbers[0]
        if(numbers[i+1] > numbers[i]) bigNum= numberArray[i+1]
    }
    return bigNum
}


var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];



console.log(biggestNumber(numbers))
