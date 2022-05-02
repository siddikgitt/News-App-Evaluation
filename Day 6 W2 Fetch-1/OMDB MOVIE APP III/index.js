document.getElementById("form").addEventListener("submit", search);

var con;
con = document.getElementById("container");

function search(){
    event.preventDefault();

    let name = document.getElementById("name").value;
    con.innerHTML = "";

    var url = "https://www.omdbapi.com/?apikey=103efe9a&t=" + name;
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function (res){
        console.log(res);
        console.log(res.Response)
        if(res.Response == "True"){
            show(res);
        }
        else{
            showError();
        }
        
    })
    .catch(function (error){
        console.log(error);
    })
}

function showError(){
    let title = document.createElement("h1");
    title.innerText ="Movie Not Found";
    let img = document.createElement("img");
    img.src = "https://media.giphy.com/media/EeIX8IZvvGZ2CRCWSO/giphy.gif";
    // console.log("In error")
    con.append(title, img);
}

function show(data){
    //console.log("no error")
    let img = document.createElement("img");
    img.src = data.Poster;
        
    let title = document.createElement("h2");
    title.innerText = data.Title;

    let releaseDate = document.createElement("p");
    releaseDate.innerText = data.Released;

    let rating = document.createElement("p");
    rating.innerText = data.imdbRating;

    let actors = document.createElement("p");
    actors.innerText = data.Actors;

    var x = data.imdbRating;
    if(x > "8.5"){
        let tag = document.createElement("h3");
        tag.innerText = "RECOMMENDED MOVIE";
        tag.style.backgroundColor = "teal";
        tag.style.color = "white";
        tag.style.border = "1px solid white";
        tag.style.width = "fit-content"
        con.append(tag);
    }

    con.append(img, title, releaseDate, actors);
}