// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js"
import { getData, appendData } from "../components/getAppend.js"


document.getElementById("navbar").innerHTML = navbar();

document.getElementById("search_input").addEventListener("keypress", fun);

function fun() {
  if (event.key == "Enter") {
    event.preventDefault();
    let val = document.getElementById("search_input").value;
    console.log(val);

    localStorage.setItem("searchBox", val)
  }
  let x = localStorage.getItem("searchBox");
  let container = document.getElementById("results");

  let url = `https://masai-mock-api.herokuapp.com/news?q=${x}`;

  getData(url).then((res) => {
    appendData(res, container, "search")
  })
}


let x = localStorage.getItem("searchBox");
let container = document.getElementById("results");

let url = `https://masai-mock-api.herokuapp.com/news?q=${x}`;

getData(url).then((res) => {
  appendData(res, container, "search")
})