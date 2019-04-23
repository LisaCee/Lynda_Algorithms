const bubbleSort = dataset => {
    for (let i = dataset.length - 1; i >= 0; i--) {
        // i = 9; i >= 0; i--
        for (let j = i; j >= 0; j--) {
            // j = 9; j < 
            if (dataset[j] > dataset[j + 1]) {
                let temp = dataset[j];
                dataset[j] = dataset[j + 1];
                dataset[j + 1] = temp;
            }
    
        } console.log('Current state: ', dataset);
    }
}

bubbleSort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53])