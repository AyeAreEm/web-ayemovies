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