let cartArr = JSON.parse(localStorage.getItem("items"));

let totalPrice = cartArr.reduce(function (sum, el, index, arr){
    return sum+el.price;
}, 0)

console.log(totalPrice);

let totalIDCart = document.getElementById("cart_total");
totalIDCart.innerText = totalPrice;

let mainDiv = document.getElementById("cart");

cartArr.map( function(el, index, arr) {
    let cartDiv = document.createElement("div");
    cartDiv.style.border = "1px solid black"

    let img = document.createElement("img");
    img.src = el.image;
    img.setAttribute("width", "270px");
    img.setAttribute("height", "200px")

    let name = document.createElement("p");
    name.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = el.price

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.setAttribute("id", "remove");
    removeBtn.addEventListener("click", function(){
        cartArr.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(cartArr));
        window.location.reload();
    })

    cartDiv.append(img, name, price, removeBtn);
    mainDiv.append(cartDiv);
});