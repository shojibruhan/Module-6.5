const arr= [3, 7, 1, 9, 5, 2, 11, 65, 43, 4]

for(let i=0; i<arr.length -1; i++)
    {
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[i]>arr[j]) 
            {
                let tmp= arr[i]
                arr[i]= arr[j]
                arr[j]= tmp
            }
            
        }
    }



console.log(arr)


