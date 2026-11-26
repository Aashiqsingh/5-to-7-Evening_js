// JSON -> javascript object notaion  

// Json is a format with pair key and value 

// let student = {
//     name:"dhruvi",
//     age:18,
//     subject:"Math",
//     marks:90
// };

// console.log(student);
// console.log(typeof student);

// console.log(student);
// console.log(student.name);
// console.log(student.subject);


let product = {
    id:101,
    name:"IPHONE",
    price:99999,
    color:["red","green","blue","white"],
    isAvailable:true,
    specification:{
        model:"iphone 17",
        ram:"16gb",
        storage:"256gb",
        camera:"58mb"
    }
}
console.log(product);
console.log(product.name);
console.log(product.price);

// console.log(product.color);
// console.log(product.color[0]);

// for(let i=0;i<product.color.length;i++)
// {
//     console.log(product.color[i]);
    
// }


// console.log(product.isAvailable==true ? "Available" : "Not available");

console.log(product.specification);
console.log(product.specification.ram);
console.log(product.specification.model);




