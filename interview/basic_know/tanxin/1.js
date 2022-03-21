class Item {
    weight = 0;
    value = 0;
    ratio = 0;
    constructor(weight, value) {
        this.weight = weight;
        this.value = value;
        this.ratio = value / weight;
    }
    getRatio() {
        return this.ratio
    }

}

function getHighestValue(capacity, weights, values) {
    let itemList = [];
    for (let i = 0; i < weights.length; i++) {
        itemList.push(new Item(weights[i], values[i]));
    }   
    itemList.sort((a, b) => b.getRatio() - a.getRatio() )
    // console.log(itemList,'-------------');
    let restCapacity = capacity; 
    let highestValue = 0;
    for (let item of itemList) {
        if (item.weight < restCapacity) {
            highestValue += item.value;
            restCapacity -= item.weight;
        } else {
            highestValue += restCapacity / item.weight * item.value;
            break;
        }
    }
    return highestValue;
}

console.log(getHighestValue(10, [4, 6, 3, 2, 4], [9, 3, 1, 6, 4]));
