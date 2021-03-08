function search(movie) {
    window.location = `${movie}`
}

const titles = document.getElementsByClassName("category");
const select = document.getElementById("titles");

for (var i = 0; i < titles.length; i++) {
    var option = document.createElement("option");
    option.text = `${titles[i].textContent}`;
    option.value = `#${titles[i].id}`;
    select.appendChild(option);
}