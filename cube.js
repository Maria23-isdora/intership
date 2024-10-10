let result=document.getElementById("cube");
result.innerText = Math.cbrt(125);

console.log(result);



let input = document.querySelector("#myVal");
input.className = "input";



input.addEventListener("change", () => {


  let div = document.createElement("div");
  div.className = "ListContainer";
  let p = document.createElement("p");

  let myVal = input.value;
  p.innerText = myVal;

 
  div.append(p);
  document.body.append(div);
  input.value = " ";


});


