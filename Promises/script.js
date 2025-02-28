// // console.log("Start");

// // const handleInnerCall = () => {
// //     console.log("Step Y");
// // };

// // const handleCall = () => {
// //     console.log("Step M");
// //     handleInnerCall();
// //     console.log("Step N");
// // };

// // //handleCall();

// // //document.querySelector('body').addEventListener("click", handleCall);

// // setTimeout(handleCall, 0);

// // // sunchronous ke bad ki asynchronous execute hoga hamhesha chahe phle call karo ya baad me 

// // console.log("End");
// ---------------------------------------------------------------------------------------------------------------------------
// console.log("A");

// const handleCall = () => {
//     console.log("H");
// }

// setTimeout(() => {
//     console.log("N");

//     setTimeout(()=> {
//         console.log("P");
//     }, 3000);

//     handleCall();

//     console.log("B");
// }, 5000);
// console.log("C");

// // ACNHBP(NHB after 5 seconds and P after 8 seconds, coz first call stack would need to be empty for it to return after sending on browser)

// -----------------------------------------------------------------------------------------------------------------------------------

/*

    Hyederabad : take user credentials and authentucation
    -------> handleUser()

    Noida : make payment form the wallet by doing the required checks
    -------> handlePayment()

    Bangalore : to handle these two teams and implement wallet functionality
    // Case 1:
        -------> const userId = handleUser()
        -------> if (userId){
                const response = handlePayment(userId)
                console.log(response)            
            }
             else {
                 console.log("Invalid details")
             }

    // Using Callbacks:
        --------> const resp = handleUser(handlePayment)  // but what if the team calls the handlePayment 2 times?
                                                       or even with wrong credentials?
                                                       or never calls it?
        --------> console.log(resp)

    // Using Promises:
    -------> const resp = handleUser() ----> returns a promise
    -------> THEN {
                const resp = handleUSer(userId)
                console.log(resp)        
    }
    -------> CTACH {
                console.log("Invalid Details")
    }
    
*/
// const res = fetch('https://dummyjson.com/test');
// console.log(res);
// res.then((a) => {
//     console.log("a", a);
//     const pr2 = a.json();

//     pr2.then((data) => {
//         console.log("data",data);
//     });
// }).catch((b)=>{
//     console.log("b", b);
// });
//-----------------------

    const getData=()=>{
    const pr = fetch("https://api.github.com/user/Samarth0012");
    console.log(pr);
    pr.then((a) => {;
        const pr2= a.json();
        pr2.then((data) =>{
            //console.log("data",data);
            showui(data);
        });
    }).catch((b) =>{
        console.log("b",b);
    });
    };
    getData();
    function showui(data)
    {
        console.log("data:",data);
        const{avatar_url,login,html_url}=data;
        const card=document.getElementById("card");
        card.innerHTML=`
        <h4>${login.toUpperCase()}</h4>
        <img src='${avatar_url}' alt='avatar'>
        <a href=${html_url}>View Profile</a>
        `;
   }     