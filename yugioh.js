function checkYuGiOh(n) {
    if (typeof n === "string" && isNaN(n)) {
    return `Invalid Parameter: ${n}`
    }
    //if its a number
    else {
    ///convert it to a javascript number
    n = Number(n);
    //create an array of n numbers
    const array = Array.from({ length: n }, (_, i) => i + 1);
    //// check the cases of n (the multiples) and return the desires result
    const result = array.map((element) => {
    ///for multiples of 2,3,5
    if (element % 2 === 0 && element % 3 === 0 && element % 5 === 0) {
    return "yu-gi-oh";
    }
    ///for multiples of 2 & 3
    else if (element % 2 === 0 && element % 3 === 0) {
    return "yu-gi";
    }
    //multiples of 2
    else if (element % 2 === 0) {
    return "yu";
    }
    //multiples of 3
    else if (element % 3 === 0) {
    return "gi";
    }
    // multiples of 5
    else if (element % 5 === 0) {
    return "oh";
    }
    // multiples of neither 2,3,5
    else {
    return element;
    }
    });
    console.log(result);
    }
    }