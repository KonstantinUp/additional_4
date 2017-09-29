module.exports = function multiply(first, second) {
    if (first.length < second.length) {
        let tmp = second;
         second = first;
         first = tmp;
    }

    let arr1 = first.split('');
    let arr2 = second.split('');
    let arr = [];
    let rlen = arr1.length + arr2.length;
    for (let k = 0; k < rlen; k++) {
        arr[k] = 0;
    }
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            arr[i + j + 1] += arr1[j] * arr2[i];
        }
    }

    for (let k = rlen - 1; k > 0; k--) {
        if (arr[k] >= 10) {
            arr[k - 1] += Math.floor(arr[k] / 10);
            arr[k] %= 10;
        }
    }

    if (arr[0] === 0) {
        delete arr[0];
    }


    return arr.join('');
};