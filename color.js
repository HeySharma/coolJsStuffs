function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const btn = document.getElementById('magic');
const clr = document.querySelector('body');
document.getElementById("hex");

btn.addEventListener('click', () => {
   clr.style.backgroundColor = getRandomColor();
   hex.innerHTML = getRandomColor();

})