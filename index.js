// Access the Btn class
const btnClass = document.querySelector(".btn")
console.log(btnClass)

//Add event Listener on Button Class
btnClass.addEventListener("click", myFunction)

// Create a div element 
var ele = document.createElement("div")

//Add class on div element 
ele.setAttribute("class", "sunny");

// This class Append in DOM means body
document.body.appendChild(ele)
console.log(ele)
    
//Create a variable for hold the number of count
var count = 0;

// Create a function When we click on Button
function myFunction() {
    count = count + 1
     ele.innerHTML = count;
    
}
 
  