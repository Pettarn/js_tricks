// 控制按钮进而控制轮播图
// 按钮高亮，就显示到对应的图片
// 得到按钮DOM的数组，配合lock进行操作

let buttons = document.getElementsByClassName('carousel-button-per') // 'array'

let container = document.getElementById('carousel-container')
let pictures = container.getElementsByTagName('li') // 'array'

let count = 0

let autoScroll = new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve(0)
    }, 500)
})

autoScroll
.then(function (count) {
    setState(count)
    return ++count
})
.then(function (count) {
    setState(count)
    return ++count
})


function setState(index) {
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

