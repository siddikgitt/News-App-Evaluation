let name = document.getElementById("name").value;
let number = document.getElementById("number").value;
let address = document.getElementById("address").value;

let i = 0;
function submit(){
    setInterval(function (){
        if(i==0){
            alert("Your order is accepted")
        }
        else if(i == 3){
            alert("Your order is being Packed ");
        }
        else if( i == 8){
            alert("Your order is in transit");
        }
        else if( i == 10){
            alert("Your order is out for delivery ");
        }
        else if( i == 12){
            alert("Order delivered");
        }
        i++;
    }, 1000)
}
