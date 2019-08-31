const arr = [1, 3, 2, 12, 8, 33, 4];
const sorted = arr.sort((a, b) => a - b);
console.log(sorted);

const binarySearch = (collection, element, left, right) => {
    if(left > right) return -1;

    const m = Math.floor((left + right) / 2);
    console.log(m);
    if(collection[m] === element) return m;
    if(collection[m] > element) return binarySearch(collection, element, left, m - 1);
    if(collection[m] < element) return binarySearch(collection, element, m + 1, right);
};

const main = () => {
    const result = binarySearch(arr, 33, 0, arr.length - 1);
    // console.log(result);
}

main();