const moreContent = document.getElementById("container");
const loadBtn = document.getElementById("loadBtn");
const dataList = document.getElementById("moviesList");
const subjectBug = document.getElementById("subject");
const mainBug = document.getElementById("main");
const genres = ["Action", "Crime", "Sci-Fi", "Comedy", "Fnf"];
let loaded = 0;

// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
        registration.update();
    });
}

function search(movie) {
    window.location = `${movie}`;
}

// load more section
async function loadHandler(categories) {
    loaded++;

    // load in genre for all genres and categories being requested
    for (let i = 0; i < categories.length; i++) {
        await load(categories[i]);
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

    moreContent.appendChild(header); // add h1 to the main

    for (let i = 0; i < result.length; i++) {
        // if display doesn't exists
        if (result[i].display == null) {
            // create link and image elements
            let anchor = document.createElement("a");
            let img = document.createElement("img");

            anchor.href = result[i].link; // set link to json link
            img.src = result[i].smallImg; // set src of image
            img.alt = result[i].title; // set alt of image
            img.title = result[i].title; // set title of image
            img.loading = "lazy";
            img.style.marginLeft = (window.innerWidth < 501) ? "3px" : "13px"; // set margin of image

            anchor.appendChild(img); // append image to the link
            div.appendChild(anchor); // then append link to div

            let options = document.createElement("option");
            options.dataset.value = result[i].link;
            options.textContent = result[i].title;

            dataList.appendChild(options);
        }
    }

    loadBtn.remove();
    moreContent.appendChild(div); // add the surrounding div to the main div where all the movies are displayed.

    let newLoadBtn = document.createElement("button");

    // if this is the first time running the function, set newCategories to the next genre
    if (loaded == 1) {
        newCategories = [genres[2], genres[3]];
        newLoadBtn.onclick = async () => await loadHandler(newCategories);
        newLoadBtn.textContent = "Load more";
    } else if (loaded == 2) {
        newCategories = [genres[4]];
        newLoadBtn.onclick = async () => await loadHandler(newCategories);
        newLoadBtn.textContent = "Load more";
    } else { // else, say there is no more to be loaded
        newLoadBtn.textContent = "No more";
    }

    newLoadBtn.id = "loadBtn";
    moreContent.appendChild(newLoadBtn);
}

// datalist option value
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

// report a bug to the server
async function sendBug() {
    fetch("https://ayemovies.herokuapp.com/report-bug", {
        method: "post",
        headers: {
            "Accept": "application/json, text/plan, */*",
            'Content-Type': "application/json"    
        },
        body: JSON.stringify({subject: subjectBug.value, main: mainBug.value})
    });

    subjectBug.value = '';
    mainBug.value = '';
}

// delete an issue
async function deleteIssue(elem) {
    let parent = elem.parentNode;
    parent.remove();

    fetch("https://ayemovies.herokuapp.com/issues?dev=true", {
        method: "post",
        headers: {
            "Accept": "application/json, text/plan, */*",
            'Content-Type': "application/json"    
        },
        body: JSON.stringify({dev: "true", delete: parent.id})
    });
}