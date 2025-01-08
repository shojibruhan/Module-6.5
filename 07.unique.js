var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const unique= []

for(let i=0; i<numbers.length; i++)
{
    let element= numbers[i]
    if(unique.find(num => num == element))  continue;
    
    else unique.push(element)
  
}
console.log(unique)