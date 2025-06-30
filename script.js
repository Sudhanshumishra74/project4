const shareBtn = document.getElementById("share-btn");
const closeBtn = document.getElementById("close-btn");
const socialsContainer = document.querySelector(".card-socials-container");
let isSocialOpen = false;

function showSocials() {
  socialsContainer.classList.remove("close-socials", "hidden");
  socialsContainer.classList.add("show-socials");

  isSocialOpen = true;
}

function closeSocials() {
  socialsContainer.classList.remove("show-socials");
  socialsContainer.classList.add("close-socials");
  setTimeout(() => {
    socialsContainer.classList.add("hidden");
  }, 500)
  
  isSocialOpen = false;
}

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  isSocialOpen ? closeSocials() : showSocials();
})

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeSocials();
})

window.addEventListener("click", (e) => {
  if (isSocialOpen && !socialsContainer.contains(e.target)) {
    closeSocials();
  }
});