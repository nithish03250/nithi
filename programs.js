//write a  java script porgram to find the pattern of the given 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

//use for loop , nested  loop , coordinate

for(let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        str += "* ";
    }
    console.log(str);
}

// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}