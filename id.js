let car = {type:"Fiat", model:"500"};
let car1 ={
    type:"Tata",
    model:"400",

};
let x = document.getElementById("card");
console.log(car);
console.log(car1);



function Person(type,model) {
    this.type= type;
    this.model = model;
    
};
 console.log(Person);
  
 Person.append(car, car1);

 
