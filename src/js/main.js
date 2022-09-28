let toTopButton = document.getElementById("to-top-button");
let skillsGrid = document.getElementById("skills-grid");
window.addEventListener('click', e => clickAnim(e));
document.addEventListener("DOMContentLoaded", main);
document.cookie = "SameSite=Lax";

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

function clickAnim(e) {
    const circle = document.createElement('div');
    circle.className = 'click-circle';
    circle.style.top = `${e.pageY - 20}px`;
    circle.style.left = `${e.pageX - 20}px`;
    document.body.appendChild(circle);
  
    setTimeout(() => {
        circle.remove();
    }, 1500)
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
