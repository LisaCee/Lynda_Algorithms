let items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

const find_item = (item, itemList) => {
    for (let i = 0; i < items.length; i++) {
        if (itemList[i] == item) {
            return true;
        }
    } 
    return false;
}

console.log(find_item(87, items))
console.log(find_item(250, items))
