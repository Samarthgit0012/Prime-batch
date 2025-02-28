// const parent = document.getElementById("parent");
// const ul = document.createElement("ul")
// const li1 = document.createElement("li")
// li1.innerText = "Item 1"
// const li2 = document.createElement("li")
// li2.innerText = "Item 2"
// const li3 = document.createElement("li")
// li3.innerText = "Item 3"

// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)

// parent.appendChild(ul)


//------------------------------------------REACT-----------------------------------------------------


// console.log(React);
// console.log(React);

console.log(React)
const domRoot =  document.getElementById("parent")
const reactRoot = ReactDOM.createRoot(domRoot);
const li1 = React.createElement("li",{},"Item 1");//type option(Styles and some other thing) children
 const li2 = React.createElement("li",{

    style:{
        color:"blue"
    },
    
 },"Item 2");


 const li3 = React.createElement("li",{},"Item 3");
 const ul = React.createElement("ul",{},[li1,li2,li3]);

 const title = React.createElement("h1",{},"Hello this React Dom")
 console.log("type of title:",typeof title);
 console.log("title",title)

 const title2 =
    {    $$typeof :Symbol.for("react.element"),
        "type": "h1",
        "key": null,
        "ref": null,
        "props": {
            "children": "Hello this is React Dom"
        },
       
    }
 
 reactRoot.render(title);