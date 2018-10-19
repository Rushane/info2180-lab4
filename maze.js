window.onload = function () {
    var x = document.querySelectorAll(".boundary");
    var y = document.getElementById("end");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener("mouseover", mouseOver);
    }
    y.addEventListener("mouseover", mouseOver2)

    function mouseOver() {
        for (i = 0; i < x.length; i++) {
            x[i].className = "boundary youlose";     
        }   
    }

    function mouseOver2() {
        alert("You win!");
    }
}












