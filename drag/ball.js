var ball = document.getElementById('ball')
ball.onmousedown = function (event) {
    var mouseX = event.clientX
    var mouseY = event.clientY
    moveAt(mouseX, mouseY)

    function moveAt (X, Y) {
        ball.style.top = Y + 'px'
        ball.style.left = X + 'px'
    }
    document.addEventListener("mousemove", onMouseMove)
    function onMouseMove (event) {
        moveAt(event.clientX, event.clientY)
    }
    
    document.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove)
        document.onmouseup = null
    }
}

