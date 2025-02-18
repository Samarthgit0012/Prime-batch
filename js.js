console.log("Hello World");
// const sumModulo = (a, b) => (a+b)%10;
// console.log(sumModulo(5, 3));
const sumModulo = (a, b) => {
    const ans = (a+b)%10;
    // const printpretty = (txt) => {
    //     console.log("-------------", txt, "--------------");
    // }
    // printpretty(ans);
    return ans;
};

sumModulo(10, 35);

const printpretty=(txt)=> {
    console.log("------------", txt, "-------------");
}

const obj = {
    "name":"Samarth",
    "name":"Saksham",
    "Surname":"Srivastava",
    "address":"Basti"
};

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(typeof(Object.keys(obj)));
console.log(obj.address);

const sum = sumModulo(15, 14);
printpretty(sum);

sumModulo(15, 13, printpretty);