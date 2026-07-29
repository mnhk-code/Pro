const prices = document.querySelectorAll(".price");
const section = document.querySelector(".card");

let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300 && !started) {
    started = true;

    setTimeout(() => {
      prices.forEach((price) => startCounter(price));
    }, 1000);
  }
};

function startCounter(price) {
  let start = 0;
  let end = +price.dataset.price;

  let counter = setInterval(() => {
    start++;
    price.textContent = "$" + start;

    if (start >= end) {
      clearInterval(counter);
    }
  }, 2000 / end);
}
Aos.init(){
  duration:100;
  once:true;
  offest:200;
}
