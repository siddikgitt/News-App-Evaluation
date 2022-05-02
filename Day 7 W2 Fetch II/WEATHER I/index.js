
 document.getElementById("div2").hidden = true;

function getData(){
    
    let city = document.getElementById("city").value;
    console.log(city)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f90fc20c73956fd570263539f1197eba`;

    fetch(url)
        .then(function (res){
            return res.json();
        })
        .then(function (res){
            console.log("Result:", res);
            append(res)
        })
        .catch(function (error){
            console.log("Catch Error:", error);
        });
}

function append(data){
    let container = document.getElementById("container");
    

    let div1Main = document.getElementById("div1");
    div1Main.innerHTML = "";

    let city = document.createElement("p");
    city.innerText = `City Name: ${data.name}`;

    document.getElementById("div2").hidden = false;

    let map = document.getElementById("gmap_canvass");
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    let min = document.createElement("p");
    min.innerHTML = `<i class="fa fa-solid fa-temperature-arrow-down"></i>Minimum Temperature: ${data.main.temp_min}`;

    let max = document.createElement("p");
    max.innerHTML = `<i class="fa fa-solid fa-temperature-arrow-up"></i>  Max Temperature: ${data.main.temp_max}`;

    let current = document.createElement("p");
    current.innerHTML = `<i class="fa fa-solid fa-temperature-full"></i>  Current Temperature ${data.main.temp}`;

    let humidity = document.createElement("p");
    humidity.innerHTML = `<i class="fa fa-solid fa-droplet-degree"></i>  Humidity ${data.main.humidity}`;

    let wind = document.createElement("p");
    wind.innerHTML = `<i class="fa fa-solid fa-wind-turbine"></i> Wind Speed ${data.wind.speed}`;

    let cloud = document.createElement("p");
    cloud.innerHTML = `<i class="fa fa-solid fa-cloud"></i>  Clouds ${data.clouds.all}`;

    let sunrise = document.createElement("p");
    sunrise.innerHTML = `<i class="fa fa-solid fa-sunrise"></i>  Sunrise ${data.sys.sunrise}`;

    let sunset = document.createElement("p");
    sunset.innerHTML = `<i class="fa fa-solid fa-sunset"></i> Sunset ${data.sys.sunset}`;

    div1Main.append(city, min, max, current, humidity, wind, cloud, sunrise, sunset);
    container.append(div1Main);
}

