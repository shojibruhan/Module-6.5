const big= (nameList) =>
{
    let bigName= nameList[0]
    for(let i=0; i< nameList.length -1; i++)
    {
        if(nameList[i+1].length > nameList[i].length) bigName= nameList[i+1]
    }
    return bigName
}

var friends = ["rahim", "karim", "abdul", "sadsd",  "heroAlom"];



console.log(big(friends))
