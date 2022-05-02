import navbar from "../components/navbar.js";


import { getData, appendData } from "../components/showData.js";

navbar().then((res) => {
    document.getElementById("navbar").innerHTML = res;
    let response = getData("https://www.themealdb.com/api/json/v1/1/random.php", "random");
    response.then((data) =>{
        // console.log(data)
        let parent = document.getElementById("showItemsRandom");
        appendData(data, parent, "random");
    })
})