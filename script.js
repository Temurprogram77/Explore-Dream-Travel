let hotel = document.querySelector(".hotel");
let flight = document.querySelector(".flight");
let living = document.querySelector(".dubai_wrt");
let istanbul = document.querySelector(".istanbul_wrt");
let home = document.querySelector(".home");
let offers = document.querySelector(".offers");
let ebook = document.querySelector(".ebook");
let deetinations = document.querySelector(".deetinations");
let blog = document.querySelector(".blog");
let testemonial = document.querySelector(".testemonial");
let contact = document.querySelector(".contact");
let btn = document.querySelector(".btn button");
let btn2 = document.querySelector(".btn22 button");
let btn3 = document.querySelector(".btn33 button");
let btn4 = document.querySelector(".btn44 button");
let btn5 = document.querySelector(".btn55 button");
let btn6 = document.querySelector(".btn66 button");

hotel.addEventListener("click", () => {
  // istanbul.innerHTML = "Default";
  // living.innerHTML = "0";
  flight.style.background = "transparent";
  flight.style.color = "black";
  hotel.style.background = "rgba(2, 122, 197, 0.844)";
  hotel.style.color = "white";
});
flight.addEventListener("click", () => {
  hotel.style.background = "transparent";
  hotel.style.color = "black";
  flight.style.background = "rgba(2, 122, 197, 0.844)";
  flight.style.color = "white";
});
home.addEventListener("click", () => {
  home.style.color = "white";
  offers.style.color = null;
  ebook.style.color = null;
  deetinations.style.color = null;
  blog.style.color = null;
  testemonial.style.color = null;
  contact.style.color = null;
});
offers.addEventListener("click", () => {
  offers.style.color = "white";
  home.style.color = null;
  ebook.style.color = null;
  deetinations.style.color = null;
  blog.style.color = null;
  testemonial.style.color = null;
  contact.style.color = null;
});
ebook.addEventListener("click", () => {
  ebook.style.color = "white";
  home.style.color = null;
  offers.style.color = null;
  deetinations.style.color = null;
  blog.style.color = null;
  testemonial.style.color = null;
  contact.style.color = null;
});
deetinations.addEventListener("click", () => {
  deetinations.style.color = "white";
  home.style.color = null;
  ebook.style.color = null;
  offers.style.color = null;
  blog.style.color = null;
  testemonial.style.color = null;
  contact.style.color = null;
});
blog.addEventListener("click", () => {
  blog.style.color = "white";
  home.style.color = null;
  ebook.style.color = null;
  offers.style.color = null;
  deetinations.style.color = null;
  testemonial.style.color = null;
  contact.style.color = null;
});
testemonial.addEventListener("click", () => {
  testemonial.style.color = "white";
  home.style.color = null;
  ebook.style.color = null;
  offers.style.color = null;
  deetinations.style.color = null;
  blog.style.color = null;
  contact.style.color = null;
});
contact.addEventListener("click", () => {
  contact.style.color = "white";
  home.style.color = null;
  ebook.style.color = null;
  offers.style.color = null;
  deetinations.style.color = null;
  blog.style.color = null;
  testemonial.style.color = null;
});

// btn.addEventListener("click", () => {
//   living.innerHTML = "1";
//   istanbul.innerHTML = "Miami";
// });
// btn2.addEventListener("click", () => {
//   istanbul.innerHTML = "Japan";
//   living.innerHTML = "1";
// });
// btn3.addEventListener("click", () => {
//   istanbul.innerHTML = "Dubai";
//   living.innerHTML = "1";
// });
// btn4.addEventListener("click", () => {
//   istanbul.innerHTML = "Taj-mahal";
//   living.innerHTML = "1";
// });
// btn5.addEventListener("click", () => {
//   istanbul.innerHTML = "New York";
//   living.innerHTML = "1";
// });
// btn6.addEventListener("click", () => {
//   istanbul.innerHTML = "Greece";
//   living.innerHTML = "1";
// });

const tooglebtn = document.querySelector(".toogle_btn");
const tooglebtnicon = document.querySelector(".icon");
const dropdownmenu = document.querySelector(".dropdown_menu");

tooglebtn.onclick = function () {
  dropdownmenu.classList.toggle("open");
  const isOpen = dropdownmenu.classList.contains("open");

  tooglebtnicon.classList = isOpen
    ? "fa-solid fa-regular fa-xmark"
    : "fa-solid fa-bars-staggered";
};

