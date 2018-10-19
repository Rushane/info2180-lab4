window.onload = function () {
    var x = document.querySelectorAll(".boundary");
    var y = document.getElementById("end");
    var z = document.getElementById("start");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener("mouseover", mouseOver);
    }
    y.addEventListener("mouseover", winMazeAlert) // event listener for alert 
    z.addEventListener("click", resetMaze) // event listener for restarting

    function mouseOver() {
        for (i = 0; i < x.length; i++) {
            x[i].className = "boundary youlose";     
        }   
    }

    function winMazeAlert() {
        alert("You win!");
    }

    function resetMaze() {
        location.reload(); // location.reload() reloads the resource from the current URL
    }
}












