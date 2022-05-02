let form = document.querySelector("#form").addEventListener("submit", checkdata);

var userArr = JSON.parse(localStorage.getItem("users"));

function checkdata(){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    // console.log("OP")
    let stat = "No";
    if(email != "" && pwd != ""){
        for(var i=0; i<userArr.length; i++){
            if(userArr[i].email == email && userArr[i].pwd == pwd){
                stat = "Yes";
                window.location.href = "index.html";
            }
        }   
        if(stat == "No"){
            alert("Invalid Credentials");
        }     
    }
    else{
        alert("Fields are empty");
    }
}