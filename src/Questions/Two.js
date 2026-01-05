

function Two(arr) {
    let largestNum = Math.max(arr[0], arr[1]);
    let secLarge = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            secLarge = largestNum;
            largestNum = arr[i];
        }
        else if (arr[i] > secLarge && arr[i] < largestNum) {
            secLarge = arr[i];
        }
    }

    return secLarge;
}

console.log(Two([10, 5, 8, 20, 15])); 
