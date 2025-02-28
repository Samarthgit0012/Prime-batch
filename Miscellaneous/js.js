// // console.log("Hello World");
// // // const sumModulo = (a, b) => (a+b)%10;
// // // console.log(sumModulo(5, 3));
// // const sumModulo = (a, b) => {
// //     const ans = (a+b)%10;
// //     // const printpretty = (txt) => {
// //     //     console.log("-------------", txt, "--------------");
// //     // }
// //     // printpretty(ans);
// //     return ans;
// // };

// // sumModulo(10, 35);

// // const printpretty=(txt)=> {
// //     console.log("------------", txt, "-------------");
// // }

// // const obj = {
// //     "name":"Samarth",
// //     "name":"Saksham",
// //     "Surname":"Srivastava",
// //     "address":"Basti"
// // };

// // console.log(obj);
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(typeof(Object.keys(obj)));
// // console.log(obj.address);

// // const sum = sumModulo(15, 14);
// // printpretty(sum);

// // sumModulo(15, 13, printpretty);

// const getMetaData = () => {
//     const name = prompt("Please enter your name ");
//     console.log("Hello", name);
//     const numOfSubText = prompt("Enter the number of subjects ");
//     return parseInt(numOfSubText);
// };

// const getSubject = (num) => {
//     const record = {};
//     for (let i = 0; i < num; i++) {
//         const subName = prompt(`Please enter the name of the subject ${i + 1} `);
//         const marks = prompt(`Please enter the marks for ${subName} `);
//         record[subName] = parseFloat(marks); // Convert input to number
//     }
//     return record;
// };

// const getPercentage = (record) => {
//     let total = 0;
//     let count = 0;
//     for (let key in record) {
//         total += record[key]; // Ensure it's a number
//         count++;
//     }
//     return total / count; // Divide by the actual number of subjects
// };

// const getHighest = (record) => {
//     let max = 0;
//     let maxs;
//     for (let key in record)
//     {
//         if (max<record[key])
//         {
//             max = record[key];
//             maxs=key;
//         }
//     }
//     return maxs;
// }

// const num = getMetaData();
// const record = getSubject(num);
// const percentage = getPercentage(record);

// console.log("Percentage:", percentage);
// const maxs = getHighest(record);
// console.log("Maximum marks = ", record[maxs] ," in subject : ", maxs);

