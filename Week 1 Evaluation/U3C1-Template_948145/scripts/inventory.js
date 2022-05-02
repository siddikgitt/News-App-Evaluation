var prodArr = JSON.parse(localStorage.getItem("data"));


prodArr.map(function (el, index, arr){
    var mainDiv = document.querySelector("#products_data");

    var boxBiv = document.createElement("div");

    var img = document.createElement("img");
    img.src = el.image;
    img.style.height = "200px";
    img.style.width = "200px"

    var brand = document.createElement("p");
    brand.innerText = el.brand;

    var name = document.createElement("p");
    name.innerText = el.name;

    var price = document.createElement("p");
    price.innerText = el.price

    var removebtn = document.createElement("button");
    removebtn.setAttribute("id", "remove_product")
    removebtn.textContent = "Remove";
    removebtn.addEventListener("click", function(){
        prodArr.splice(index,1);
        console.log(prodArr);
        localStorage.setItem("data", JSON.stringify(prodArr));
        window.location.reload();
    })

    boxBiv.append(img, brand, name, price, removebtn);

    mainDiv.append(boxBiv);

})