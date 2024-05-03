const showContentButton = document.querySelector('[data-js="show_content"]');
const mainContent = document.querySelector('[data-js="content"]');

function showContent() {
  mainContent.style.display = "block";
}

function hideContent() {
  mainContent.style.display = "none";
}

showContentButton.addEventListener("click", () => {
  if (
    mainContent.style.display === "none" ||
    mainContent.style.display === ""
  ) {
    showContent();
  } else {
    hideContent();
  }
});
