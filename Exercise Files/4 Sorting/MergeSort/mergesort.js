const mergesort = dataset => {
  if (dataset.length > 1) {
    let mid = Math.floor(dataset.length / 2);
    let leftarr = dataset.slice(0, mid);
    let rightarr = dataset.slice(mid);

    mergesort(leftarr);
    mergesort(rightarr);

    let l = 0;
    let r = 0;
    let m = 0;

    while (l < leftarr.length && r < rightarr.length) {
      if (leftarr[l] < rightarr[r]) {
        dataset[m] = leftarr[l];
        l++;
      } else {
        dataset[m] = rightarr[r];
        r++;
      }
      m++;
    }
    while (l < leftarr.length) {
      dataset[m] = leftarr[l];
      l++;
      m++;
    }
    while (r < rightarr.length) {
        dataset[m] = rightarr[r];
        r++;
        m++;
    }
  }
  console.log(dataset)
};

mergesort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53]);
