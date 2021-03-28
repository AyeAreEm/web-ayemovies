const titles = document.getElementsByClassName("category");
const select = document.getElementById("titles");
const moreContent = document.getElementById("container");
const loadBtn = document.getElementById("loadBtn");
const genres = ["Action", "Crime"];
let loaded = -1;

function search(movie) {
    window.location = `${movie}`;
}

async function loadHandler(categories) {
    loaded++;
    console.log(loaded);
    for (let i = 0; i < categories.length; i++) {
        await load(categories[i]);
        console.log(i);
    }
}

async function load(category) {
    let newCategories = [];
    let loadBtn = document.getElementById("loadBtn");
    // get json data for all movies in a certain category
    let res = await fetch(`https://ayemovies.herokuapp.com/${category}`);
    let result = await res.json();

    // create a div to surround the links
    let div = document.createElement("div");
    // create h1 to show which category it is
    let header = document.createElement("h1");

    div.className = "category";
    header.textContent = `${category}`;

    div.appendChild(header); // add h1 to the div

    for (let i = 0; i < result.length; i++) {
        // if display doesn't exists
        if (result[i].display == null) {
            // create link and image elements
            let anchor = document.createElement("a");
            let img = document.createElement("img");

            anchor.href = result[i].link; // set link to json link
            img.src = result[i].smallImg; // set src of image
            img.alt = result[i].title; // set alt of image
            img.loading = "lazy";
            img.style.marginLeft = "13px"; // set margin of image

            anchor.appendChild(img); // append image to the link
            div.appendChild(anchor); // then append link to div
        }
    }

    loadBtn.remove();
    moreContent.appendChild(div); // add the surrounding div to the main div where all the movies are displayed.

    let newLoadBtn = document.createElement("button");

    if (loaded == 0) {
        newCategories = [genres[1]];
        newLoadBtn.onclick = () => loadHandler(newCategories);
        newLoadBtn.textContent = "Load more";
    } else {
        newLoadBtn.onclick = () => newLoadBtn.textContent = "No more";
    }

    console.log(newCategories);
    newLoadBtn.id = "loadBtn";

    moreContent.appendChild(newLoadBtn);
}

const des = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
Object.defineProperty(HTMLInputElement.prototype, 'value', {
    get: function() {
        const value = des.get.call(this);
        if (this.type === 'text' && this.list) {
            const opt = [].find.call(this.list.options, o => o.value === value);
            return opt ? opt.dataset.value : value;
        }
        
        return value;
	}
});