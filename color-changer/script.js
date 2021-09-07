var clr1 = document.getElementById("clr1");
var clr2 = document.getElementById("clr2");
var body = document.getElementById("body");

function setbg(){
    body.style.background =
    "linear-gradient(to right, "
     +clr1.value
     +", "
     +clr2.value
     +")";

}
clr1.addEventListener("input",setbg);
clr2.addEventListener("input",setbg);
