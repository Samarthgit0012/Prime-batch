const data = [
    {name : "Samarth", city : "Delhi", email : "samarthdec12@gmail.com"},
    {name : "Saksham", city : "Noida", email : "saksham18@gmail.com"},
    {name : "Rudra", city : "Varanasi", email : "rudrajune@gmail.com"},
    {name : "Shivam", city : "Lucknow", email : "shivam11@gmail.com"},
];

const root = document.getElementById('parent');

data.forEach((elem) => {
    const newCard = document.createElement("div");
    newCard.className="card";
    newCard.addEventListener("click", ()=>{
        console.log("Div clicked");
        newCard.style.backgroundColor = getRandomColor();
    }, false)
    newCard.innerHTML = `
    <h4>${elem.name}</h4>
    <h6>${elem.email}</h6>
    <p class="text">${elem.city}</p>
    `
    root.appendChild(newCard);
});

const btn = document.get
const handleBgChange = () => {
    console.log("btn clicked!");
    //logic to change bg color
    const bodyElem = document.querySelector('body');
    bodyElem.style.backgroundColor = getRandomColor();
    
};
                                                                                                                     
const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};

const textElem = document.querySelectorAll(".text");
// textElem.addEventListener("click", () => {
//     textElem.style.backgroundColor = getRandomColor();
// })


textElem.forEach((elem) => {
    console.log("Para click");
    elem.addEventListener("click", (event) => {
        elem.style.backgroundColor = getRandomColor();
        event.stopPropagation()
    })
});