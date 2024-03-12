// An object Groups multiple objects together

const Product = {
  //this is an object
  name: "socks",
  price: 100,
};

console.log(Product);
console.log(typeof Product);
console.log(Product.name); //object & property
console.log(Product.price); //object & property

Product.name = "cotton socks";
console.log(Product);

//Adding New Property to object
Product.newProperty = true;
console.log(Product);

//Deleting the Property of object
delete Product.newProperty;
console.log(Product);

//Why we use objects
