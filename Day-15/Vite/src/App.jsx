import React from "react";
import { useEffect } from "react";
// import axios from "axios";
import { useState } from "react"
import Card from "./Components/Card";

// // const AppPage = () => {

//   const getDatanormal1 = () => {
//     const pr1 = fetch('https://dummyjson.com/products');

//     pr1.then((res)=> {
//       console.log("Res", res); 
      
//       const pr2 = res.json();
      
//       pr2.then((data)=> {
//         console.log("Data", data);
//       })

//     }).catch((err)=>{
//       console.log("Error Ocurred", err);
//     });
//   };

//   getDatanormal1

// // const AppPage = () => {

//   const getDatanormal2 = () => {
//     const pr1 = fetch('https://dummyjson.com/products');

//     pr1.then((res)=> {
//       console.log("Res", res); 
      
//       const pr2 = res.json();
//       return pr2;
      

//     }).catch((err)=>{
//       console.log("Error Ocurred", err);

//     }).then((data)=> {
//       console.log("Data", data);
//     })
//   };

//   getDatanormal2

// // const AppPage = () => {
  
//   const useAsync = async() => {
    
//     try {
//       const response = await fetch ('https://dummyjson.com/products')
//       const data = await response.json();
//       console.log(data);

//     }

//     catch (err) {
//       console.log("Error", err);
//     }

//     finally {
//       console.log("Completed Succesfully");
//     }

//   };
//   useAsync();

// // const AppPage = () => {

//   const getDatausingaxios = () =>{
    
//     const usingaxios = axios.get('https://dummyjson.com/products')
  
//   usingaxios.then ((res)=> {
//     console.log(res.data);
  
//   }).catch((err)=> {
//     console.log("Error", err);
//   })
//   }
  
//   getDatausingaxios();

const AppPage = () => {
  
  const [Data, setData] = useState([]);
  const [count, Setcount] = useState(0);

  const getData = async() => {
    
    try {
      const response = await fetch('https://dummyjson.com/products');
      const temp = await response.json();
      setData(temp.products);
      console.log("Completed successful", temp);
    }
    catch (err){
      console.log(err);
    } 
  }

  // getData(); otherwise count ka ki mtlb ki nhi qki lagataar chalta hi jayega
  
  useEffect(() => {
    getData()
  }, [])


  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Wow</p>
     {/* <button onClick={()=> Setcount(count+1)}>Click me to render</button> */}
     <div className="card-container">
        {Data.map((ele) => (
          <Card key={ele.id} title={ele.title} price={ele.price} thumbnail={ele.thumbnail} />
        ))}
      </div>
    </React.Fragment>
  )
}
export default AppPage;