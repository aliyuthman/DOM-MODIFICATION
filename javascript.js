document.getElementById("languages").innerHTML += '<li id="c">C</li>';
document.getElementById("php").innerHTML = 'Python';

document.querySelector("h3").innerHTML = 'Programming languages';
document.querySelector("h3").textContent = "Languages"
document.querySelector("#content").innerHTML += "<h2>Hello</h2>";
document.querySelector("h2").innerHTML = "Hello World";




document.querySelector(".beginning").innerHTML += " that are awesome";

document.querySelector("#csharp").innerHTML = "C Sharp";//grab the innerHTML of the element with id csharp and assigned "C Sharp" as it value.


const titleElement = document.querySelector("h3");
titleElement.classList.remove("beginning");
titleElement.classList.add("title");
console.log(titleElement);


//create the element
//set properties
//add the element to the DOM


const elemFat = document.createElement("h1");
elemFat.id = "fatima";
elemFat.className = "taddy";
elemFat.textContent = "Nna fati"

//styling

document.getElementById("languages").appendChild(elemFat);
elemFat.style.color = "purple";
elemFat.style.width = "500px";
elemFat.style.height = "200px";
elemFat.style.background = "pink";
elemFat.style.display = "flex";
elemFat.style.justifyContent = "center";
elemFat.style.alignItems = "center";
elemFat.style.border = "solid 8px";
elemFat.style.borderRadius = "300px"
elemFat.style.fontWeight ="30px"
elemFat.style.fontSize = "5rem"
elemFat.style.margin = "0 auto"

