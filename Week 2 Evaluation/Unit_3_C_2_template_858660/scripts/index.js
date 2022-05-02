// Store cart items in local storage with key: "items"

const url = "https://grocery-masai.herokuapp.com/items";

fetch(url)
.then(function (res){
    return res.json();
})
.then(function (res){
    console.log("got the data");
    give(res);
})
.catch(function (error){
    console.log("Got error");
    console.log(error);
})
let countDiv = document.getElementById("item_count");
let cartCountArr = JSON.parse(localStorage.getItem("items"));
if (cartCountArr == undefined){
    countDiv.innerText = 0;
    console.log("2")
}
else{
    countDiv.innerText = cartCountArr.length ;
}



function give(res){
    console.log(res);
    let data = res.data;
    data.forEach(function (el){
        let mainDiv = document.getElementById("items");

        let prodDiv = document.createElement("div"); 
        prodDiv.style.border = "1px solid black"
        
        let img = document.createElement("img"); 
        img.src = el.image;
        img.setAttribute("width","270px");
        img.setAttribute("height", "200px")

        let name = document.createElement("p"); 
        name.innerText = el.name;

        let price = document.createElement("p"); 
        price.innerText = el.price

        let cartBtn = document.createElement("button"); 
        cartBtn.innerText = "Add to Cart";
        cartBtn.setAttribute("id","add_to_cart");
        cartBtn.addEventListener("click", function(){
            alert("Added to cart");
            addtoCart(el);
            let cartCountArr = JSON.parse(localStorage.getItem("items"));
            countDiv.innerText = cartCountArr.length ;
        })

        prodDiv.append(img, name, price, cartBtn);
        mainDiv.append(prodDiv);
    });   
}

function addtoCart(el){
    let cartArr = JSON.parse(localStorage.getItem("items")) || [] ;

    cartArr.push(el);
    localStorage.setItem("items", JSON.stringify(cartArr));
}