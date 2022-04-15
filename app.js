const APIKEY =`46ad7457603b9b0104e633e78cd60e16`;


const tempHot=(e)=>{
    const ip =document.getElementById('input')
    const city=ip.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

    fetch(url)
    .then(res=> res.json())
    .then(data => displayTamp(data))
}

const displayTamp =data=>{
    console.log(data)
    document.getElementById('name').innerText=`${data.name}`
    document.getElementById('temp').innerText=`${data.main.temp}`
    document.getElementById('wind').innerText=`${data.wind.speed}`
}