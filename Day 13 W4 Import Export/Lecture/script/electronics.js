import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

// let getData = async () => {
//     try{
//         let res = await fetch("https://fakestoreapi.com/products/category/jewelery");
//         let data = await res.json();
//         console.log(data);
//         append(data)
//     }
//     catch(er){
//         console.log("Error:", er);
//     }
// }

// let append = async (data) =>{
//     let container = document.getElementById("container");
//     data.forEach(({title}) => {
//         let p = document.createElement("p");
//         p.innerText = title ;

//         container.append(p);
//     });
// }

// getData()


let url = "https://fakestoreapi.com/products/category/electronics" ;
let container = document.getElementById("product");

import { getData, append } from "./fetch.js";

getData(url)
.then((res) => {
    append(res, container)
})