// CAREER DETAILS PAGE
const textarea = document.querySelector("textarea");
if (textarea) {
  textarea.addEventListener("keyup", (e) => {
    textarea.style.height = "8rem";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  });
}

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.classList.add("active");
  }
}
function hideSidebar() {
  const close = document.querySelector(".close-icon");
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    close.addEventListener("click", function () {
      sidebar.classList.remove("active");
    });
  }
}
// CONTACT US PAGE
// const contactTextarea = document.querySelector(".contact-us textarea");
// contactTextarea.addEventListener("keyup", (e) => {
//   contactTextarea.style.height = "8rem";
//   let scHeight = e.target.scrollHeight;
//   // console.log(scHeight);
//   contactTextarea.style.height = `${scHeight}px`;
// });

// HEADER RESPONSIVE
const navbar = document.querySelector("header");
const navHeight = navbar.offsetHeight;

console.log("Nav height:", navHeight);
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navbar.classList.add("nav-hidden");
    // console.log("going down");
  } else {
    navbar.classList.remove("nav-hidden");

    // console.log("going up");
  }
  lastScrollY = window.scrollY;
});
