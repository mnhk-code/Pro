const prices = document.querySelectorAll(".price");
const section = document.querySelector(".prices");

let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      prices.forEach((price) => startCount(price));
      started = true;
    }
  }
};

function startCount(price) {
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
