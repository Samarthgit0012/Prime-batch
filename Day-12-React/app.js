import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card = ({username}) => {
    // console.log(abc);
    // console.log(abc.username);
    // const {username} = abc;
    // console.log(username);
    return (
        <div>
            <h3> Hello {username} </h3>
            <p> Nice to meet you </p>
        </div>
    );
};

const App = () => {
    return (
        // <div>
        //     <h1> Hello </h1>
        // </div>
        // React.createElement("h1", {}, "Hello from App!")
        <div>
            <Card username = "Samarth"></Card>
            <Card username = "Saksham"></Card>
            <Card username = "Shivam" />
            {Card ("Not Samarth")}
            {Card ({username : "Samyak"})}
            <Card username=""></Card>
        {/*  ispe fatega   {Card ()}    */}
        </div>
    );
};



console.log("Hello Console");

reactRoot.render(App());
// reactRoot.render(<App />);
