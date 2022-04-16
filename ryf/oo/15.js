var obj = {
    hi() {
        console.log(this, '---------');
        return () => {
            console.log(this, '++++');
            return function() {
                console.log(this, 'xxx');
            }
        }   
    }
}

obj.hi()()();