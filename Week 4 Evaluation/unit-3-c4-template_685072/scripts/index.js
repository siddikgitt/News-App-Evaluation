// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js"
  document.getElementById("navbar").innerHTML = navbar();

  document.getElementById("search_input").addEventListener("keypress", fun);

  function fun() {
    if (event.key == "Enter") {
      event.preventDefault();
      let val = document.getElementById("search_input").value;
      console.log(val);

      localStorage.setItem("searchBox", val)
      window.location.href = "search.html"
    }
  }