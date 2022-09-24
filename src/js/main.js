let toTopButton = document.getElementById("to-top-button");
let skillsGrid = document.getElementById("skills-grid");
document.addEventListener("DOMContentLoaded", main);

function main() {
  // Handle hovering the skills grid
  skillsGrid.addEventListener("mouseleave", skillsLeave);
  skillsGrid.addEventListener("mouseover", skillsOver);
}

function skillsLeave() {
  // For every skill remove blur and hide text
  for (let child of skillsGrid.children) {
    child.classList.remove("blur");
    child.classList.remove("scale-110");
    child.getElementsByTagName('span')[0].classList.add('hidden');
  }
}

function skillsOver() {
  // For every skill
  for (let child of skillsGrid.children) {
    // Add blur and hide text if not hovering
    if(!child.matches(':hover')) {
      child.classList.add("blur");
      child.classList.remove("z-10");
      child.classList.remove("scale-110");
      child.getElementsByTagName('span')[0].classList.add('hidden');
    }
    // If hovering remove blur and add text
    else {
      child.classList.remove("blur");
      child.classList.add("z-10");
      child.classList.add("scale-110");
      child.getElementsByTagName('span')[0].classList.remove('hidden');
    }
  }
}

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
};

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}