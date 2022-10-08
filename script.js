// const contents = document.querySelectorAll(".content");
// const lis = document.querySelectorAll("li");
// const arr = Array.from(lis);

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     removeLiClass();
//     li.classList.add("active");
//     removeImgClass();
//     const contentShowIdx = arr.indexOf(li);
//     contents[contentShowIdx].classList.add("show");
//   });
// });

// function removeLiClass() {
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
// }
// function removeImgClass() {
//   contents.forEach((content) => {
//     content.classList.remove("show");
//   });
// }

const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();
    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}
function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
