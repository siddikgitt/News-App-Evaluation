document.getElementById("form").addEventListener("submit", search);

var con;

function search(){
    event.preventDefault();
    con = document.getElementById("container");
    con.innerHTML = "";
    
    var name = document.getElementById("name").value;

    const url = "https://www.omdbapi.com/?apikey=103efe9a&t=" + name;

    fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        console.log(res);
        show(res);
    })
    .catch(function (err){
        console.log(err);
    })

}



function show(data){

    let img = document.createElement("img");
    img.src = data.Poster;
        
    let title = document.createElement("p");
    title.innerText = data.Title;

    let year = document.createElement("p");
    year.innerText = data.Year;

    con.append(img, title, year);
    
    // data.forEach(function(data) {
    //     let img = document.createElement("img");
    //     img.src = data.Poster;
        
    //     let title = document.createElement("p");
    //     title.innerText = data.Title;

    //     let year = document.createElement("p");
    //     year.innerText = data.Year;

    //     con.append(img, title, year);
    // });
}