//1
console.log("===1===");
let a = Math.ceil( Math.random() * 10);
let b = Math.ceil( Math.random() * 10);

if (a > b)
    console.log(a, "(a) didesnis uz", b, "(b)");
if (b > a)
    console.log(b, "(b) didesnis uz", a, "(a)");
if (a === b)
    console.log(a, "(a) lygu", b, "(b)");
console.log("");


//2
console.log("===2===");
for (let i = 1; i < 11; i++)
    console.log(i);
console.log("");


//3
console.log("===3===");
for (let i = 0; i < 11; i+=2)
    console.log(i);
console.log("");


//4
console.log("===4===");
for (let i = 0; i < 5; i++)
    console.log( Math.ceil( Math.random() * 10) );
console.log("");


//5
console.log("===5===");
let n5;
do
{
    n5 = Math.ceil( Math.random() * 10);
    console.log(n5);
}
while (n5 != 5)
console.log("");


//6
console.log("===6===");
let length6 = Math.ceil( Math.random() * 11) + 19; //generuoja masyvo ilgi 20-30 (imtinai)
let array6 = [];
for (let i = 0; i < length6; i++)
    array6.push( Math.ceil( Math.random() * 21) + 9); //generuoja masyvo skaicius 10-30 (imtinai)
console.log(array6);

let highest6 = 0;
for (let i = 0; i < length6; i++)
{
    if (highest6 < array6[i])
        highest6 = array6[i];
}
console.log(highest6);
console.log("");


//7
console.log("===7===");

//Array generavimas
let array7 = [];
for (let i = 0; i < 100; i++)
{
    let n = Math.floor( Math.random() * 4);
    let l;
    switch(n)
    {
        case 0:
            l = "A";
            break;
        case 1:
            l = "B";
            break;
        case 2:
            l = "C";
            break;
        case 3:
            l = "D";
            break;
        default:
            l = "E"; //E stands for Error
            break;
    }
    array7.push(l);
}
console.log(array7);

//raidziu skaiciavimas;
let As = 0;
let Bs = 0;
let Cs = 0;
let Ds = 0;
for (let i = 0; i < 100; i++)
{
    switch(array7[i])
    {
        case "A":
            As++;
            break;
        case "B":
            Bs++;
            break;
        case "C":
            Cs++;
            break;
        case "D":
            Ds++;
            break;
        default:
            break;
    }
}
console.log("A: ", As);
console.log("B: ", Bs);
console.log("C: ", Cs);
console.log("D: ", Ds);
console.log("");


//8
console.log("===8===");
function isActuallyANumber(n)
{
    return (typeof n === "number" && n * 0 === 0);
}

function lygineSuma(a, b)
{
    let sum;
    if (isActuallyANumber(a) && isActuallyANumber(b))
    {
        sum = a + b;
        if (sum % 2)
            return "Suma nelygine";
        return sum;
    }

    if (Array.isArray(a) && Array.isArray(b))
    {
        sum = a.length + b.length;
        if (sum % 2)
            return "Suma nelygine";
        return sum; 
    }
    return "Netinkama ivestis";
}
console.log(lygineSuma(1, 2));
console.log(lygineSuma(3, 3));
console.log(lygineSuma([1, 2], 3));
console.log(lygineSuma([1], [2, 2]));
console.log(lygineSuma([1, 2], [3, 4]));
console.log(lygineSuma(NaN, 2));
console.log(lygineSuma(Infinity, 2));
console.log(lygineSuma("b", 2));
console.log("");


//9
console.log("===9===");
function pirminisSkaicius(a)
{
    if (!isActuallyANumber(a))
        return "Netinkama ivestis";
    if (a < 2)
        return "Skaicius ne pirminis (ne didesnis nei 1))";
    
    let nonPrime = false;
    for (let i = 1; i < a; i++)
    {
        if(!(a % i))
        {
            nonPrime = true;
            break;
        }
    }

    if(nonPrime)
        return "Skaicius ne pirminis";
    return "Skaicius pirminis";
}
console.log(pirminisSkaicius(0));
console.log(pirminisSkaicius(1));
console.log(pirminisSkaicius(7));
console.log(pirminisSkaicius(6));
console.log(pirminisSkaicius(NaN));
console.log(pirminisSkaicius(Infinity));
console.log(pirminisSkaicius("a"));
console.log("");


//10
console.log("===10===");
function telefonoNumeris(array10)
{
    if (!Array.isArray(array10))
        return "Netinkama ivestis";
    if (array10.length !== 10)
        return "Netinkamo ilgio numeris";
    for (let i = 0; i < array10.length; i++)
    {
        if (!isActuallyANumber(array10[i]))
            return "Netinkama ivestis";
    }

    let string10 = "(";
    for (let i = 0; i < 3; i++)
        string10 += array10[i];

    string10 += ") ";
    for (let i = 3; i < 6; i++)
        string10 += array10[i];

    string10 += "-";
    for (let i = 6; i < array10.length; i++)
        string10 += array10[i];

    return string10;
}
console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(telefonoNumeris([1, 2, 3, "a", 5, 6, 7, 8, 9, 0]));
console.log(telefonoNumeris(1234567890));