let getData = async (url) => {
    let res = await fetch(url);

    let data = await res.json();
    console.log(data.articles);
    return data.articles;
}

let appendData = (data, container, who) => {
    if (who == "search") {

        //let container = document.getElementById("results");
        container.innerHTML = "";
        data.forEach((el) => {
            let div = document.createElement("div");
            div.style.display = "flex";
            div.style.padding = "20px";
            div.setAttribute("class", "news");
            div.addEventListener("click", function show() {
                localStorage.setItem("news", JSON.stringify(el));
                window.location.href = "./news.html";
            });


            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.style.height = "200px";
            img.style.width = "200px"

            let innerDiv = document.createElement("div");

            let title = document.createElement("h3");
            title.innerText = el.title;

            let des = document.createElement("p");
            des.innerText = el.description

            innerDiv.append(title, des);

            div.append(img, innerDiv);
            container.append(div);
        });

    }

    if (who == "news") {
        container.innerHTML = "";
        let div = document.createElement("div");
        div.style.padding = "20px";
        div.setAttribute("class", "news");
        div.addEventListener("click", function show() {
            localStorage.setItem("news", JSON.stringify(el));
            window.location.href = "./news.html";
        });


        let img = document.createElement("img");
        img.src = data.urlToImage;
        img.style.height = "200px";
        img.style.width = "200px"

        let innerDiv = document.createElement("div");

        let title = document.createElement("h3");
        title.innerText = data.title;

        let des = document.createElement("p");
        des.innerText = data.description

        innerDiv.append(title, des);

        div.append(img, innerDiv);
        container.append(div);
    }
}


export { getData, appendData } 