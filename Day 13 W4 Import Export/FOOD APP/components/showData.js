
let getData = async (url, who) => {
    //console.log("In getData");
    //e.preventDefault();
    //console.log("showData.js:", url);

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);

    if (who == "search" || who == "random") {
        return data.meals;
    }
}

let appendData = (data, parent, who) => {
    // let mainDiv =  document.getElementById("showItems");
    parent.innerHTML = "";
    data.forEach((el) => {
        let div = document.createElement("div");

        if (who == "search" || who == "random") {

            let img = document.createElement("img");
            img.src = el.strMealThumb;
            img.style.height = "200px";
            img.style.width = "200px"

            let title = document.createElement("p");
            title.innerHTML = `<b> ${el.strMeal} </b>`;

            if (who == "random") {
                let category = document.createElement("p");
                category.innerHTML = `<b> Category: </b> ${el.strCategory}`;
    
                let area = document.createElement("p");
                area.innerHTML = `<b> Area: </b> ${el.strArea}`;
    
                let instruction = document.createElement("p");
                instruction.innerHTML = `<b> Instruction: </b> ${el.strInstructions}`;
                div.append(img, title, category, area, instruction);
                parent.append(div);
                return;
            }
            div.append(img, title);
            parent.append(div);

        }

        
        
    });

}

export { getData, appendData }