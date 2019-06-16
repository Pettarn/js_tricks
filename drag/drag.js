function Drag(config) {
    this.moveTarget = document.getElementById(config.id)
    if(config.parentId) {
        this.targetParent = document.getElementById(config.parentId)
        this.max_left = this.targetParent.clientWidth - this.moveTarget.offsetWidth
        this.max_top = this.targetParent.clientHeight - this.moveTarget.offsetHeight
    }
    else {
        this.max_left = document.documentElement.clientWidth - this.moveTarget.offsetWidth
        - parseInt(this.getStyle(document.body, "border-width"));
        this.max_top = document.documentElement.clientheight - this.moveTarget.offsetWidth
        - parseInt(this.getStyle(document.body, "border-width"));
    }
    this.lock = true
}

Drag.prototype.getStyle = function (element, attr) {
    if(element.currentStyle) {
        return element.currentStyle[attr]
    }
    else {
        return window.getComputedStyle(element, null).getPropertyValue(attr)
    }
}

Drag.prototype.startDrag = function () {
    this.moveTarget.onmousedown = function(e) { this.moDown(e) }.bind(this)
    this.moveTarget.onmousemove = function (e) { this.moMove(e) }.bind(this)
    this.moveTarget.onmouseup = function(e) { this.moUp(e) }.bind(this)
}

Drag.prototype.moDown = function (e) {
    e = e || window.event
    //  鼠标按下时的坐标
    this.startClientX = e.clientX
    this.startClientY = e.clientY
    //  鼠标按下时，被拖拽物体的 left 和 top 
    this.startLeft = parseInt(this.moveTarget.style.left || this.getStyle(this.moveTarget, "left"))
    this.startTop = parseInt(this.moveTarget.style.top || this.getStyle(this.moveTarget, "top"))
    this.lock = false
}

Drag.prototype.moMove = function (e) {
    e = e || window.event
    if(e.which != 1) {
        this.lock = true
    }
    if(!this.lock) {
        realLeft = this.startLeft + e.clientX - this.startClientX // 避免出现偏移（鼠标一直指向moveTarget中心）
        realTop = this.startTop + e.clientY - this.startClientY
        rightLeft = realLeft > this.max_left ? this.max_left : (realLeft > 0 ? realLeft : 0)
        rightTop = realTop > this.max_top ? this.max_top : (realTop > 0 ? realTop : 0)
        this.moveTarget.style.left = rightLeft + 'px'
        this.moveTarget.style.top = rightTop + 'px'
    }
}

Drag.prototype.moUp = function (e) {
    e = e || window.event
    this.lock = true
}