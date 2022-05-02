const url = "https://fakestoreapi.com/products";

fetch(url)
.then(function (res){
    return res.json();
})
.then(function (res){
    console.log(res);
    append(res)
})
.catch(function (error){
    console.log(error);
})

function append(data){

    data.forEach(function(el) {
        var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = el.image;
        img.setAttribute("width", "50px");
        img.setAttribute("height", "50px");
        
        var p = document.createElement("p");
        p.innerText = el.title;
        var price = document.createElement("p");
        price.innerText = el.price;

        div.append(img, p, price);

        document.getElementById("container").append(div);
    });
   
}