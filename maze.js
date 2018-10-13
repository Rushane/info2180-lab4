/*window.onload = function () { 
    document.getElementById("boundary1").addEventListener("mouseover", mouseOver);
    function mouseOver(){
        document.getElementById("boundary1").className = "boundary youlose";
        //document.querySelectorAll("div.boundary");
    } 
} */

window.onload = function () {
    var x = document.querySelectorAll(".boundary");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener("mouseover", mouseOver);
    }

    function mouseOver() {
        for (i = 0; i < x.length; i++) {
            x[i].className = "boundary youlose";     
        } 
    }
}









