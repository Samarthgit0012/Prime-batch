
const getData = (text) =>
{
    const pr = fetch('https://dummyjson.com/recipes/search?q=Margherita');
    pr.then ((res) => {
        const pr2 = res.json();
        pr2.then ((data) => {
            showCards(data.recipes)
        })
    })
}

const root = document.getElementById('card-container')

const showCards = (dataAr) => {
    root.innerHTML="";
    dataAr.forEach((ele) => {
        const newDiv = document.createElement("div")
        newDiv.className="card";
        newDiv.innerHTML=`
        <h4>${ele.name}</h4>
        <img src =${ele.image}>
        <p>${Element.cuisine}</p>
        `
        root.appendChild(newDiv);
    })
}

const handleSearch = (e) => {
    getData(e.target.value)
}
