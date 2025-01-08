const leapYear= (n) =>
{
    if(n % 4 ==0 && n % 100 != 0 || n % 400 == 0) console.log(`${n} is a leap Year`);
    else console.log(`${n} is not a leap year.`)
}


const year= 1900;

leapYear(year);