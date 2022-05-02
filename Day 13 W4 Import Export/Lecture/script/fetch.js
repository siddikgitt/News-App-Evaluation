let getData = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        // append(data)
        return data
    }
    catch (er) {
        console.log("Error:", er);
    }
}

let append = (data, container) => {
    data.forEach(({ title }) => {
        let p = document.createElement("p");
        p.innerText = title;

        container.append(p);
    });
}

export {getData, append}


