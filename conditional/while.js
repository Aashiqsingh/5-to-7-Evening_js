// let i=0;

// while(i<5)
// {
//     console.log(i);
//     i++;
// }

// let num = 985;
// let rev = 0;
// while(num!=0)
// {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }

// console.log(rev);


let i=0;
do{
    let j=0;
    do{
        document.write("*");
        j++;
    }while(j<=i);
    i++;
    document.write("<br>");

}while(i<=5);