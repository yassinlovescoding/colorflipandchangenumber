var counter = 0;
const countervalue = document.getElementById("counter-value");
const increment = document.getElementById("increment-btn");
const decrement = document.getElementById("decrement-btn");
const reset = document.querySelector("#reset");
increment.addEventListener("click",()=>{
    counter++;
    countervalue.innerHTML=counter;
})
decrement.addEventListener("click",()=>{
    counter--;
    countervalue.innerHTML=counter;
})
reset.addEventListener("click",resetfunction)
function resetfunction(){
    counter = 0;
    countervalue.innerHTML=counter;
}

<div id="colorflipper">
        <button onclick="changecolor()">
            flip color!!
            

        </button>
    </div>
    
function changecolor(){}
let red=Math.floor(Math.random() * 256);
let green=Math.floor(Math.random() * 256);
let blue=Math.floor(Math.random() * 256);
let color="rgb("+red+","+green+","+blue+")";
document.getElementById("colorflipper").style.backgroundColor=color;
{}
function changecolor(){
    let red=Math.floor(Math.random() * 256);
    let green=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);
    let color="rgb("+red+","+green+","+blue+")";
    document.getElementById("colorflipper").style.backgroundColor=color;}
