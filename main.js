let arr = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 4) {
        // console.log(arr[i]);
    }
}

let res = arr.map(function(item) {
    if (item > 4) {
        console.log(item);
    }
})