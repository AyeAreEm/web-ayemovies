const titles = document.getElementsByClassName("category");
const select = document.getElementById("titles");
// const moreContent = document.getElementById("container");

function search(movie) {
    window.location = `${movie}`
}

// async function load() {
//     let res = await fetch("http://localhost:3000/Horror/");
//     let result = await res.json();
//     let div = document.createElement("div");
//     let header = document.createElement("h1");

//     div.className = "category";
//     div.id = "Test";
//     header.textContent = "Horror";
//     div.appendChild(header);

//     for (let i = 0; i < result.length; i++) {
//         if (result[i].display == null) {
//             let anchor = document.createElement("a");
//             anchor.href = result[i].link;

//             let img = document.createElement("img");
//             img.src = result[i].smallImg;
//             img.alt = result[i].title;
//             anchor.appendChild(img);
//             div.appendChild(anchor);
//         }
//     }
//     moreContent.appendChild(div);
// }

for (var i = 0; i < titles.length; i++) {
    var option = document.createElement("option");
    option.text = `${titles[i].textContent}`;
    option.value = `#${titles[i].id}`;
    select.appendChild(option);
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