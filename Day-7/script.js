let data =[
    {
        id : "1",
        name:"Samarth",
        city:"Darjeeling"
    },
    {
        id : "2",
        name:"Shivam",
        city:"Lucknow"
    },
    {
        id : "3",
        name : "Saksham",
        city : "Delhi"
    }
];

const root = document.getElementById("root");
const search = document.getElementById("search");

const showCards = (newCard) => {
    root.innerHTML=''
    newCard.forEach((elem) => {
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML=`
        <h3>${elem.id}</h3>
        <h4>${elem.name}</h4>
        <p>${elem.city}</p>
        <button onClick = "deleteCard(event)">Delete</button>
        `;
        root.appendChild(card);
    });
};

const deleteCard = (e) => {
    e.target.parentElement.remove();
    const newData = data.filter((item) => item.id !== e.target.parentElement.children[0].innerText);
    data=newData;
    showCards(newData)
};

const handleSelect = (e) => {
    const selectCity = e.target.value;
    const newData = data.filter((e) => e.city==selectCity)
    showCards(newData);
};

search.addEventListener('change', handleSelect)

showCards(data);