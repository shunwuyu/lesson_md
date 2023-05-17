import MVVM from './mvvm';
// window.MVVM = require('./mvvm')

var vm = new MVVM({
    el: '#mvvm-app',
    data: {
        title: 'hello world'
    },

    methods: {
        clickBtn: function (e) {
            this.title = 'hello world';
        }
    },
});