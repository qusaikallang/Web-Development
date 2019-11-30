var btn = document.getElementById("btn");
btn.addEventListener("click",gen);

function gen(){
var col1 = document.getElementById("1").value;
var col2 = document.getElementById("2").value;
var bg  = document.getElementById("gradient");
bg.style.background=" linear-gradient(to right,"+col1+","+col2+")";
var print = document.getElementById("print");
print.textContent="background:"+bg.style.background+";";
}