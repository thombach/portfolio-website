let toTopButton = document.getElementById("to-top-button");
let skillsGrid = document.getElementById("skills-grid");
let sectionTitles = document.getElementsByClassName("section-title");
window.addEventListener("click", (e) => clickAnim(e));
document.addEventListener("DOMContentLoaded", main);
document.addEventListener("scroll", (e) => titlesAnim(e));
document.cookie = "SameSite=Lax";

function main() {
  // Handle hovering the skills grid
  skillsGrid.addEventListener("mouseleave", skillsLeave);
  skillsGrid.addEventListener("mouseover", skillsOver);
  typingAnim();
}

function skillsLeave() {
  // For every skill remove blur and hide text
  for (let child of skillsGrid.children) {
    child.classList.remove("blur");
    child.classList.remove("scale-125");
    child.getElementsByTagName("span")[0].classList.add("hidden");
  }
}

function skillsOver() {
  // For every skill
  for (let child of skillsGrid.children) {
    // Add blur and hide text if not hovering
    if (!child.matches(":hover")) {
      child.classList.add("blur");
      child.classList.remove("z-10");
      child.classList.remove("scale-125");
      child.getElementsByTagName("span")[0].classList.add("hidden");
    }
    // If hovering remove blur and add text
    else {
      child.classList.remove("blur");
      child.classList.add("z-10");
      child.classList.add("scale-125");
      child.getElementsByTagName("span")[0].classList.remove("hidden");
    }
  }
}

// Blue circle animation on click
function clickAnim(e) {
  const circle = document.createElement("div");
  circle.className = "click-circle";
  circle.style.top = `${e.pageY - 20}px`;
  circle.style.left = `${e.pageX - 20}px`;
  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 1500);
}

// Titles animation on scroll
function titlesAnim(e) {
  let currentSection = null;
  for (const title of sectionTitles) {
    if (
      document.documentElement.scrollTop >=
        title.offsetTop - window.innerHeight / 2 &&
      document.documentElement.scrollTop <
        title.offsetTop + window.innerHeight / 2
    ) {
      if (currentSection !== null) {
        currentSection.classList.remove("before:w-full");
      }
      currentSection = title;
    } else {
      title.classList.remove("before:w-full");
    }
  }
  if (currentSection !== null) {
    currentSection.classList.add("before:w-full");
  }
}

// Typing text animation
function typingAnim(event) {
  // array with texts to type in typewriter
  var dataText = ["a passionate software engineer. 💻", "a mountain lover. 🏔️", "a lifelong learner. 📚", ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector(".typewriter").innerHTML =
        text.substring(0, i + 1) +
        '<span class="cursor" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 3000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 100);
    }
    // check if dataText[i] exists
    else if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  setTimeout(function () {
    StartTextAnimation(0);
  }, 500);
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
