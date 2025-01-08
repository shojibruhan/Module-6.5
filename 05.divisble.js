const list= []


for(let i=1; i<=50; i++)
{
    if(i % 3 == 0 && i % 5 ==0) list.push(i)
}

console.log(list)