import data from "../data.json" assert { type: "json" };

let toTopButton = document.getElementById("to-top-button");
toTopButton.addEventListener("click", goToTop);
let skillsGrid = document.getElementById("skills-grid");
let sectionTitles = document.getElementsByClassName("section-title");
window.addEventListener("click", (e) => clickAnim(e));
document.addEventListener("DOMContentLoaded", main);
document.addEventListener("scroll", (e) => titlesAnim(e));
document.cookie = "SameSite=Lax";

function main() {
  setAboutData();
  setSkillsData();
  setWorkData();

  // Handle hovering the skills grid
  skillsGrid.addEventListener("mouseleave", skillsLeave);
  skillsGrid.addEventListener("mouseover", skillsOver);
  typingAnim();
}

function setAboutData() {
  document.getElementById("about-p1").innerHTML = data.about.p1;
  document.getElementById("about-p2").innerHTML = data.about.p2;
  document.getElementById("about-p3").innerHTML = data.about.p3;
}

function setSkillsData() {
  document.getElementById("skills-intro").innerHTML = data.skills.intro;
  const list = data.skills.list;
  let grid = document.getElementById("skills-grid");
  for (const skill of data.skills.grid) {
    const skillData = list.find((s) => s.name === skill);
    if (skillData) {
      grid.innerHTML += `<div class="skill-container ${skillData.color}">
      <img class="h-12 w-12" src="${skillData.src}" />
      <span class="hidden">${skillData.name}</span>
    </div>`;
    }
  }
}

function setWorkData() {
  document.getElementById("work-intro").innerHTML = data.work.intro;
  const list = data.skills.list;
  const projects = data.work.projects;
  let projectsHtml = document.getElementById("work-projects");
  let reverse = false;
  for (const project of projects) {
    const skillsHtml = buildProjectSkills(list, project.skills);
    const mediaHtml = buildProjectMedia(project);
    projectsHtml.innerHTML += `<div class="card hover:scale-105 ${
      reverse ? "sm:flex-row-reverse" : ""
    } transition duration-150">
    ${mediaHtml}
    <div
      class="flex flex-col items-center sm:items-start pt-8 sm:px-8 sm:pt-0 space-y-3"
    >
      <div class="flex flex-row gap-x-2">${skillsHtml}</div>
      <h4 class="text-2xl font-bold text-teal-400">${project.name}</h4>
      <p>${project.description}</p>
      <a href="${project.href}" class="btn-primary mt-8"
        >👉 See more</a
      >
    </div>
    </div>`;
    reverse = !reverse;
  }
}

function buildProjectSkills(list, projectSkills) {
  let htmlResult = "";
  for (const skill of projectSkills) {
    const skillData = list.find((s) => s.name === skill);
    if (skillData) {
      htmlResult += `<div class="skill-container has-tooltip ${skillData.color} rounded-full h-7 w-7">
      <img class="h-4 w-4" src="${skillData.src}" />
      <span class="tooltip"> ${skillData.name} </span>
    </div>`;
    }
  }
  return htmlResult;
}

function buildProjectMedia(project) {
  let htmlResult = "";
  if (project.img) {
    htmlResult = `<img
    src="${project.img}"
    class="sm:w-[420px] sm:h-[220px] w-full"
  />`;
  }
  if (project.video) {
    htmlResult = `<div>
    <iframe
      class="sm:w-[420px] sm:h-[280px] w-full"
      src="${project.video}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>`;
  }
  return htmlResult;
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
  var dataText = data.home.sentences;

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
