const getData=(text)=> {
    const pr = fetch (`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`
        ,{headers: {
            'x-rapidapi-host' : 'google-map-places.p.rapidapi.com' , 
            'x-rapidapi-key' : 'fa37ab4644mshad733eaf12f0df3p129567jsnb2d2023a93b0'
        }}
    );

    pr.then ((res) => {
        const pr2=res.json();
        pr2.then((data)=> {
            showLocations(data);
        })
    })
}

const root = document.getElementById('location');

const showLocations = (data) => {
    root.innerHTML = "";
    const {predictions} = data;
    predictions.forEach(elem => {
        const p = document.createElement('p');
        p.innerHTML=elem.description;
        root.appendChild(p);
    })
}

let id = null
const handleSearch =(event) => {
    if (id)
    {
        clearTimeout(id);
    }
    id = setTimeout(()=> {getData(event.target.value)}, 1000)
}