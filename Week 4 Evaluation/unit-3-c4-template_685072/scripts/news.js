// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js"
import { getData, appendData } from "../components/getAppend.js"

let container = document.getElementById("detailed_news");
document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("news"));

appendData(data, container, "news");