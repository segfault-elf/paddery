/* UNIT TESTS WOOOOOOOOOOOOOO!
unit tests for the code */

const Paddery = require("../src/main.js");
const paddery = new Paddery();

// unit tests for main.js

// PAD FUNCTION

// 1. unit test with char +, repeated 4 times, on the left, with original string "cat"

let test1 = paddery.pad("left", "+", 4, "cat")
if (test1 == "++++cat") {
    console.log("Test 1: passed!" + " " + test1)
} else {
    console.log("Test 1: failed!" + " " + test1)
}

// 2. unit test with char +, repeated 4 times, on the right, with original string "cat"

let test2 = paddery.pad("right", "+", 4, "cat")
if (test2 == "cat++++") {
    console.log("Test 2: passed!" + " " + test2)
} else {
    console.log("Test 2: failed!" + " " + test2)
}

// 3. unit test with negative number

let test3 = paddery.pad("right", "+", -5, "cat")
if (test3 == "Invalid timesToPad!") {
    console.log("Test 3: passed!" + " " + test3)
} else if (test3 !== "Invalid timesToPad!") {
    console.log("Test 3: failed!"  + " " + test3)
}

// 4. unit test with number 0

let test4 = paddery.pad("right", "+", 0, "cat")
if (test4 == "cat") {
    console.log("Test 4: passed!" + " " + test4)
} else {
    console.log("Test 4: failed!" + " " + test4)
}

// 5. unit test with decimal number as timesToPad

let test5 = paddery.pad("right", "+", 3.8, "cat")
if (test5 == "cat++++") {
    console.log("Test 5: passed!" + " " + test5)
} else {
    console.log("Test 5: failed!" + " " + test5)
}

// PAD_C FUNCTION

// 1. unit test with 1 repeated 4 times on the left, and 5 repeated 3 times on the right, original string "cat"

let test6 = paddery.pad_c({"left": {char: "1", timesToPad: 5}, "right": {char: "5", timesToPad: 3}}, "cat");
if (test6 == "11111cat555") {
    console.log("Test 6: passed!" + " " + test6)
} else{
    console.log("Test 6: failed!" + " " + test6)
}

// 2. unit test with 1 repeated 4.7 times on the left, and 5 repeated 5.4 times on the right, original string "cat"

let test7 = paddery.pad_c({"left": {char: "1", timesToPad: 4.7}, "right": {char: "5", timesToPad: 5.4}}, "cat");
if (test7 == "11111cat55555") {
    console.log("Test 7: passed!" + " " + test7)
} else{
    console.log("Test 7: failed!" + " " + test7)
}