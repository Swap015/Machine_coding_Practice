

function Palindrome(str) {

    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (str === reverse) {
        console.log("String is Palindrome");
    } else {
        console.log("String is NOT Palindrome");
    }
}

Palindrome("racecar");