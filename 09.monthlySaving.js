const monthlySaving = (earning, livingCost) =>
{
    if(!Array.isArray(earning)  ||  typeof livingCost != 'number')
    {
        const msg=  "Invalid Input"
        // console.log("Invalid Input");
        return msg
         
    }
   
    
    let sum= 0
    for(element of earning)
        {
            
            if(element>=3000) element = element -(.2 * element)
           
            sum+=element
        }
        
        return sum - livingCost

}



const earn= [1000, 2000, 3000]
// const earn= [1000, 2000, 2500]
// const earn= [900, 2700, 3400]
// const earn= 900

const cost= 5400
// const cost= 5000
// const cost= 10000
// const cost= [900, 2700, 3400]

const saving= monthlySaving(earn, cost)


if(saving === undefined) {console.log(saving);}
else if(saving < 0) console.log("Earn More")
else console.log(saving);
