let a = parseInt(prompt("Enter first number :"));
let b = parseInt(prompt("Enter second number :"));

let choice = parseInt(prompt("1 - Add\n2 - Sub\n3 - Mul\n4 - Div\n\nEnter your option :"));

switch(choice)
{
    case 1: let add = a + b;
            alert("Addition = " + add);
            break;
    case 2: let sub = a - b;
            alert("Subtract = "+ sub);
            break;
    case 3: let mul = a * b;
            alert("Multiplication = "+mul);
            break;
    case 4: let div = a / b;
            alert("Division = "+ div);
            break;
    default: alert("Invalid choice !!");

}