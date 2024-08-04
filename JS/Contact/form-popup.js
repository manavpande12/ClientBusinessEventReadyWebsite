
//popup when click mail
function open_popup(){
    document.getElementsByClassName("popup-center")
    [0].classList.add("active-popup");

    let popSfx=document.getElementById("popUp");
    popSfx.play();

}

document.getElementById('popup-close-btn').addEventListener("click",function(){
document.getElementsByClassName("popup-center")
[0].classList.remove("active-popup");

let swooshSfx = document.getElementById("swoosh");
swooshSfx.play();

});