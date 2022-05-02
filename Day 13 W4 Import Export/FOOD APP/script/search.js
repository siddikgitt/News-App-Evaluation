import navbar from "../components/navbar.js";

import { getData, appendData } from "../components/showData.js";

document.getElementById("navbar").innerHTML = await navbar();

function reload() {
    let name = document.getElementById("name").value;
    //console.log("Name:", name);
    if (name == "") {
        let parent = document.getElementById("showItems");
        parent.innerHTML = ""
        return
    }
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    // console.log("Search.js:", url);
    let response = getData(url, "search")
    response.then((data) => {
        let parent = document.getElementById("showItems");
        if (data == null) {
            parent.innerHTML = ""
            return false
        }
        appendData(data, parent, "search");
    })

}

// let getData = async() =>{
//     console.log("in ");
//     //e.preventDefault();
//     let name = document.getElementById("name").value;
//     if(name == ""){
//         return
//     }

//     let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
//     let data = await res.json();
//     console.log(data);
//     return data.meals;
//     // appendData(data.meals);

// }

// let appendData = (data) =>{
//     let mainDiv =  document.getElementById("showItems");
//     mainDiv.innerHTML = "";
//     data.forEach((el) => {
//         let div =  document.createElement("div");

//         let img = document.createElement("img");
//         img.src = el.strMealThumb;
//         img.style.height = "200px";
//         img.style.width = "200px"

//         let title =  document.createElement("p");
//         title.innerText = el.strMeal;

//         div.append(img, title);
//         mainDiv.append(div);
//     });

// } 

// let main = async () =>{
//     let data = await getData();
//     if(data === undefined){
//         let mainDiv =  document.getElementById("showItems");
//         mainDiv.innerHTML = "";
//         return false;
//     }
//     appendData(data)
// }

// let id;
// let debounce = (main, delay) => {
//     if(id){
//         clearTimeout(id);
//     }
//     id = setTimeout(function(){
//         main();
//     }, delay);
// };

// let mainDebounce = () =>{
//     debounce(main, 1000)
// }

// document.getElementById("name").addEventListener("input", mainDebounce);

// let main = async () => {
//     let data = await getData();
//     if (data === undefined) {
//         let mainDiv = document.getElementById("showItems");
//         mainDiv.innerHTML = "";
//         return false;
//     }
//     appendData(data)
// }

let id;
let debounce = (reload, delay) => {
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        reload();
    }, 1000);
};

let mainDebounce = () =>{
    debounce(reload, 1000)
}

document.getElementById("name").addEventListener("input", mainDebounce);

// strMeal: "Koshari"
// strMealThumb: "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg"
//meals.foreach