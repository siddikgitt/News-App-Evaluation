//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


var scopeObj = {
    pt1: "Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible.",
    pt2: "Global scope: Variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.",
    pt3: "Local scope: Variables that you declare inside a function are local to that function. They are called Local Variables and can’t be accessed in Global Scope.",
    pt4: "Block scope: Variables that you declare inside a block {} using let or const are limited only to that block",
    pt5: "All the above are type of scope"
};
localStorage.setItem("scope", JSON.stringify(scopeObj));

var hoistingObj = {
    pt1: "Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program",
    pt2: "It doesn't care about variable values. All it wants to know what variables are present in a program.",
    pt3: "Hoisting allows functions to be safely used in code before they are declared.",
    pt4: "Variable and class declarations are also hoisted, so they too can be referenced before they are declared. ",
    pt5: "Note: The term hoisting is not used in any normative specification prose prior to ECMAScript® 2015 Language Specification. Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript."
}
localStorage.setItem("hoisting", JSON.stringify(hoistingObj));

var constructor_functionsObj = {
    pt1: "The constructor method is a special method of a class for creating and initializing an object instance of that class.",
    pt2: "A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
    pt3: "In JavaScript, you can create multiple objects from a constructor function",
    pt4: "In JavaScript, when 'this' keyword is used in a constructor function, this refers to the object when the object is created.",
    pt5: "To prevent a constructor function to be invoked without the new keyword, ES6 introduced the new.target property."
}
localStorage.setItem("constructor_functions", JSON.stringify(constructor_functionsObj));

var prototypeObj = {
    pt1: "Every object in JavaScript has a built-in property, which is called its prototype.",
    pt2: "The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. ",
    pt3: "The chain ends when we reach a prototype that has null for its own prototype.",
    pt4: "When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.",
    pt5: "object called Object.prototype, and it is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null"
}
localStorage.setItem("prototype", JSON.stringify(prototypeObj));

 
document.querySelector("#scope").addEventListener("click", scope);
function scope(){
    var scopeGet = JSON.parse(localStorage.getItem("scope"));
    console.log(scopeGet.pt5);
    var list = document.querySelector("#list");
    list.innerHTML = "";
    for(var key in scopeGet){
        var li = document.createElement("li");
        var st = scopeGet[key];
        li.innerText = st;
        list.append(li);
    }
    var videoSpan = document.querySelector("#videoSpan");
    videoSpan.innerHTML = "";
    var video = document.createElement("video");
    video.setAttribute("width", "320");
    video.setAttribute("height", "240");
    video.setAttribute("controls", "");
    var source = document.createElement("source");
    source.setAttribute("src", "abc.mp4");
    source.setAttribute("type", "video/mp4");
    video.append(source);
    videoSpan.append(video)
}

document.querySelector("#hoisting").addEventListener("click", hoisting);
function hoisting(){
    var hoistingGet = JSON.parse(localStorage.getItem("hoisting"));
    var list = document.querySelector("#list");
    list.innerHTML = "";
    for(var key in hoistingGet){
        var li = document.createElement("li");
        var st = hoistingGet[key];
        li.innerText = st;
        list.append(li);
    }
    var videoSpan = document.querySelector("#videoSpan");
    videoSpan.innerHTML = "";
    var video = document.createElement("video");
    video.setAttribute("width", "320");
    video.setAttribute("height", "240");
    video.setAttribute("controls", "");
    var source = document.createElement("source");
    source.setAttribute("src", "abc.mp4");
    source.setAttribute("type", "video/mp4");
    video.append(source);
    videoSpan.append(video)
}

document.querySelector("#constructor_functions").addEventListener("click", constructor_functions);
function constructor_functions(){
    var constructor_functions_Get = JSON.parse(localStorage.getItem("constructor_functions"));
    var list = document.querySelector("#list");
    list.innerHTML = "";
    for(var key in constructor_functions_Get){
        var li = document.createElement("li");
        var str = constructor_functions_Get[key];
        li.innerText = str;
        list.append(li); 
    }
    var videoSpan = document.querySelector("#videoSpan");
    videoSpan.innerHTML = "";
    var video = document.createElement("video");
    video.setAttribute("width", "320");
    video.setAttribute("height", "240");
    video.setAttribute("controls", "");
    var source = document.createElement("source");
    source.setAttribute("src", "abc.mp4");
    source.setAttribute("type", "video/mp4");
    video.append(source);
    videoSpan.append(video)
}

document.querySelector("#prototype").addEventListener("click", prototypefunction);
function prototypefunction(){
    var prototypeGet = JSON.parse(localStorage.getItem("prototype"));
    var list = document.querySelector("#list");
    list.innerHTML = "";
    for(var key in prototypeGet){
        var li = document.createElement("li");
        var str = prototypeGet[key];
        li.innerText = str;
        list.append(li);
    }
    var videoSpan = document.querySelector("#videoSpan");
    videoSpan.innerHTML = "";
    var video = document.createElement("video");
    video.setAttribute("width", "320");
    video.setAttribute("height", "240");
    video.setAttribute("controls", "");
    var source = document.createElement("source");
    source.setAttribute("src", "abc.mp4");
    source.setAttribute("type", "video/mp4");
    video.append(source);
    videoSpan.append(video)
}