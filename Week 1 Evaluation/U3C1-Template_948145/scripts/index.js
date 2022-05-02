//store the products array in localstorage as "data"
document.querySelector("form").addEventListener("submit", addToLS);

function addToLS(){
    event.preventDefault();
    
    var addArr = JSON.parse(localStorage.getItem("data")) || []; 
    // var addArr = [];

    function pObj(brand, name, price, img){
        this.brand = brand,
        this.name = name,
        this.price = price,
        this.image = img
    }

    var pBrand = document.querySelector("#product_brand").value;
    var pName = document.querySelector("#product_name").value;
    var pPrice = document.querySelector("#product_price").value;
    var pImage = document.querySelector("#product_image").value;

    var prod = new pObj(pBrand, pName, pPrice, pImage);
    addArr.push(prod);
    
    console.log(addArr);
    
    localStorage.setItem("data",JSON.stringify(addArr));
}