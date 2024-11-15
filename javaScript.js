function opennav(){
    var h = document.getElementById("links");
    if(h.style.transform=="translateX(0px)"){
        h.style.transform="translateX(100%)";
    } else {
        h.style.transform="translateX(0px)";
    }
}