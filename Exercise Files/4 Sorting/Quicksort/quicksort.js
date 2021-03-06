const partition = (datavalues, first, last) => {
    let pivotValue = datavalues[first];
    let lower = first + 1;
    let upper = last;

    let done = false;
    while (!done) {
        while (lower <= upper && datavalues[lower] <= pivotValue) {
            lower++;
        }
        while (upper >= lower && datavalues[upper] >= pivotValue) {
            upper--;
        }
        if (upper < lower) {
            done = true;
        }
        else {
            let temp = datavalues[lower];
            datavalues[lower] = datavalues[upper];
            datavalues[upper] = temp;
        }
    }
    console.log(datavalues)
    let temp2 = datavalues[first];
    datavalues[first] = datavalues[upper];
    datavalues[upper] = temp2;

    return upper;
}
const quickSort = (dataset, first, last) => {
    if (first < last) {
        let pivotIndex = partition(dataset, first, last);
        let left = ++pivotIndex;
        quickSort(dataset, first, --pivotIndex);
        quickSort(dataset, left, last)
    }
    return dataset;
}


let arr = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19];
console.log(quickSort(arr, 0, arr.length - 1));