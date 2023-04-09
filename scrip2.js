console.log(document.documentElement); // Hela html dokumnete
console.log(document.head); //Hela head
console.log(document.body); //Hela bodyn

// väljer element
// använder dessa två mest
document.querySelector("header"); // första elementet som matchar head
document.querySelectorAll(".section"); // Välje alla med klassen section inte bara första, lämar ifrån sig en nodelist
document.getElementById("section--1"); // väljer via id
document.getElementsByTagName("button"); // väljer alla knappar, lämnar ifrån sig en HTMLCollection inte nodelist
document.getElementsByClassName("btn"); // väljer alla knappar,

const allSections = document.querySelectorAll(".section");
const allButtons = document.getElementsByTagName("button");

// Creating element
// insterAdjacentHTML // Den gillar han bäst

const header = document.querySelector("header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "wee use cookis";
message.innerHTML =
  'we use kakor <button class="btn btn--close-cookie">close</button>';

header.prepend(message); // hamnar först, firs child, kan bara va på ett ställe
//header.append(message); // hamnar sista, last child, kan bara va på ett ställe

// om man vill ha samma message på fler ställen måste du klona det
//header.append(message.cloneNode(true));

//header.before(message.cloneNode(true)); // lägger till message innan header elementet
//header.after(message.cloneNode(true)); // lägger till message efter header elementet
//header.before(message); // lägger till message innan header elementet
//header.after(message); // lägger till message efter header elementet

// deleta elementet när du klickar på knappen
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// style
message.style.backgroundColor = "red";
message.style.width = "120%";

//get computed style
console.log(getComputedStyle(message).backgroundColor);

/// exempel
const header = document.querySelector("header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "wee use cookis";
message.innerHTML =
  'we use kakor <button class="btn btn--close-cookie">close</button>';

header.prepend(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// style
message.style.backgroundColor = "red";
message.style.color = "black";
message.style.width = "120%";

//get computed style
console.log(getComputedStyle(message).backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

const logo = document.querySelector(".nav__logo");
//logo.alt = "logoDUMM";
//console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

//logo.setAttribute("company", "bankist");

// Classes
logo.classList.add("c", "d"); // kan ha flera classer
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// exempel när man gör något med h1 gammalt sätt, men man kan ha flera funktioner
//const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", function (e) {
//   e.preventDefault();
//   console.log(h1.textContent);
// });

// eller gör så här / / / nytt sätt, kan bara ha en funktion annars skrivs den över
// const h1 = document.querySelector("h1");
// h1.onmouseenter = function (e) {
//   e.preventDefault();
//   console.log(h1.textContent);
// };

// om man vill ta bort event lisnern, så den ex bara funkar en gång
const h1 = document.querySelector("h1");
const alertH1 = function (e) {
  console.log("hej på dig");
  //h1.removeEventListener("mouseenter", alertH1);
};
h1.addEventListener("mouseenter", alertH1);

// eller ta bort den efer en tid
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 2000);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor(0, 255);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor(0, 255);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  (this.style.backgroundColor = randomColor(0, 255)), true;
});

const h1 = document.querySelector("h1");

// going down: child elements
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "red";
h1.lastElementChild.style.color = "brown";

// going up: parents elements
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

// going side siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = "rotate(180deg)";
    //el.style.transform = "scale(0.5)";
  }
});

//const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4) translateX(-800px)";
// slider.style.overflow = "visible";
