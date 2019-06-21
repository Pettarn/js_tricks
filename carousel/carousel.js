// 控制按钮进而控制轮播图
// 按钮高亮，就显示到对应的图片
// 得到按钮DOM的数组，配合lock进行操作

let buttons = document.getElementsByClassName('carousel-button-per') // 'array'

let container = document.getElementById('carousel-container')
let pictures = container.getElementsByTagName('li') // 'array'


document.documentElement.onload = setState(0)

function setState(index) {
    if(index >= 3) {
        index %= 3
        return setState(index)
    }
    for (let i = 0; i < 3; i++) {
        if (index === i) {
            pictures[index].style.display = "block"
            buttons[index].style.background = "red"
        }
        else {
            pictures[i].style.display = "none"
            buttons[i].style.background = "grey"
        }
    }

    setTimeout(() => {
        index++
        setState(index)
    }, 1500)
}

function debounce (func) {
    setTimeout(func, 1000)
    
}

buttons[0].onclick = function () {
    setState(0)
}
buttons[1].onclick = function () {
    setState(1)
}
buttons[2].onclick = function () {
    setState(2)
}

