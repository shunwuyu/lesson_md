var array = [1, 2, 1, 1, '1'];

function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}

console.log(unique(array));