var name = "windowsName";

var a = {

    name : "Cherry",

    func1: function () {
        console.log(this.name)     
    },

    func2: function () {
        var _this = this;
        setTimeout( function() {
            _this.func1()
        },100);
    }

};

a.func2()