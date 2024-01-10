// CAREER DETAILS PAGE
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", (e) => {
  textarea.style.height = "8rem";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
// CONTACT US PAGE
// const contactTextarea = document.querySelector(".contact-us textarea");
// contactTextarea.addEventListener("keyup", (e) => {
//   contactTextarea.style.height = "8rem";
//   let scHeight = e.target.scrollHeight;
//   // console.log(scHeight);
//   contactTextarea.style.height = `${scHeight}px`;
// });
