let menu = document.getElementById("toggle");
let close = document.getElementById("close");
let menuDiv = document.getElementById("menu");
let menuDiv1 = document.getElementById("menuDiv1");
let menuDiv2 = document.getElementById("menuDiv2");
let menuLink = document.getElementsByClassName("menuLink");
let active = document.getElementById("active");

menu.addEventListener("click", openMenu);
function openMenu(){
        menu.style.visibility = "hidden";
        menuDiv.style.visibility = "visible"; 
        menuDiv1.style.transform = "translateX(-50%) translateY(-50%)";
        active.style.color = "#37d72f";
        menuDiv2.style.opacity = "1";
}
close.addEventListener("click", closeMenu);
    function closeMenu(){
        menu.style.visibility = "visible";
        menuDiv.style.visibility = "hidden";
}