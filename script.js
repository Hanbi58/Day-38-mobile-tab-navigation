const contents = document.querySelectorAll(".content");
const lis = document.querySelectorAll("li");
const arr = Array.from(lis);

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    removeLiClass();
    li.classList.add("active");
    removeImgClass();
    const contentShowIdx = arr.indexOf(li);
    contents[contentShowIdx].classList.add("show");
  });
});

function removeLiClass() {
  lis.forEach((li) => {
    li.classList.remove("active");
  });
}
function removeImgClass() {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}
