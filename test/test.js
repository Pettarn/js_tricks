function Drag(config) {
    this.moveTarget = document.getElementById(config.id);
    if (config.parentId) {
        this.targetParent = document.getElementById(config.parentId);
        this.max_left = this.targetParent.clientWidth - this.moveTarget.offsetWidth;
        this.max_top = this.targetParent.clientHeight - this.moveTarget.offsetHeight;
    } else {
        console.log(document.documentElement.clientHeight + "||" + this.moveTarget.offsetHeight)
        this.max_left = document.documentElement.clientWidth - this.moveTarget.offsetWidth -
            parseInt(this.getStyle(document.body, "border-width"));
        this.max_top = document.documentElement.clientHeight - this.moveTarget.offsetHeight -
            parseInt(this.getStyle(document.body, "border-width"));
    }
    this.lock = true;
}
Drag.prototype.getStyle = function (element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return window.getComputedStyle(element, null).getPropertyValue(attr)
    }
};
Drag.prototype.moDown = function (e) {
    e = e || window.event;
    this.clientX = e.clientX;
    this.clientY = e.clientY;
    //鼠标按下时，drag的left值，top值(写在style中或者是css中)
    this.startLeft = parseInt(this.moveTarget.style.left || this.getStyle(this.moveTarget, "left"));
    this.startTop = parseInt(this.moveTarget.style.top || this.getStyle(this.moveTarget, "top"));
    //鼠标按下时，鼠标的clientX值，clientY值
    this.startClientX = e.clientX;
    this.startClientY = e.clientY;
    this.lock = false;
};
Drag.prototype.moMove = function (e) {
    e = e || window.event;
    if (e.which != 1) {
        this.lock = true;
    }
    if (!this.lock) {
        var realLeft = this.startLeft + e.clientX - this.startClientX;//实际的移动范围
        var realTop = this.startTop + e.clientY - this.startClientY;
        //rightLeft , rightTop; //left, top 取值(在可移动范围内)
        var rightLeft = realLeft > this.max_left ? this.max_left : (realLeft > 0 ? realLeft : 0);
        var rightTop = realTop > this.max_top ? this.max_top : (realTop > 0 ? realTop : 0);
        this.moveTarget.style.left = rightLeft + "px";
        this.moveTarget.style.top = rightTop + "px";
    }
};
Drag.prototype.moUp = function (e) {
    e = e || window.event;
    this.lock = true;
};
Drag.prototype.startDrag = function () {
    console.log(this)
    this.moveTarget.onmousedown = function (e) { this.moDown(e) }.bind(this);
    this.moveTarget.onmousemove = function (e) { this.moMove(e) }.bind(this);
    this.moveTarget.onmouseup = function (e) { this.moUp(e) }.bind(this);
}