function Button(id) {
    this.element = document.querySelector("#" + id);
    this.bindEvent();
}

Button.prototype.bindEvent = function() {
    var that = this
    // this.element.addEventListener("click", function() {
    //     that.setBgColor();
    //     // this ?
    //     // 一个函数就做一件事， 将变色抽离
    //     // this.style.backgroundColor = '#1abc9c';
    // });
    // this.element.addEventListener("click", this.setBgColor, false);
    // 箭头函数没有this
    this.element.addEventListener("click", event => this.setBgColor(event), false);
};

Button.prototype.setBgColor = function() {
    this.element.style.backgroundColor = '#1abc9c'
}