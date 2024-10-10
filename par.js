//let card = document.getElementById('mycard');

//let h1 = document.createElement('h1');

//h1.innerText="i am a text";

//console.log(h1);

//console.log(card);

let card = document.getElementById("mycard");

let h1 = document.createElement("h1");

let image = document.createElement("img");

image.src="https://th.bing.com/th/id/OIP.cvxN_XBt8t0Li3KPz_2gWwAAAA?rs=1&pid=ImgDetMain";

h1.innerText="i am a text";

card.append(h1,image);

console.log(h1);

console.log(image);


console.log(card);


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }








 