let form = document.querySelector("#form").addEventListener("submit", addData);

var userArr = JSON.parse(localStorage.getItem("users")) || [];
function addData(){
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let mobNo = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;

    if(name !="" &&  mobNo !="" && email !="" && pwd !=""){
        var u = new userObj(name, mobNo, email,pwd);
        userArr.push(u);
        localStorage.setItem("users", JSON.stringify(userArr))
    }
    else{
        alert("Field are Empty");
    }
   
}

function userObj(name, mobNo, email, pwd){
    this.name = name,
    this.mobNo = mobNo,
    this.email = email,
    this.pwd = pwd
}