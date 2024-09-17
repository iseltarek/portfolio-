const sidebar_btn = document.querySelectorAll(".bar__link");
const scrollLinks = document.querySelectorAll(".bar__btn");
const sections = document.querySelectorAll("section");

////functions
function removeActiveClasses() {
  sidebar_btn.forEach((link) => link.classList.remove("bar__btn--const"));
}

function addActiveClass(sectionId) {
  const button = document.querySelector(`a[href="#${sectionId}"]`);
  if (button) {
    button.parentElement.classList.add("bar__btn--const");
  }
}

sidebar_btn.forEach((button) => {
  button.addEventListener("click", function () {
    sidebar_btn.forEach((btn) => btn.classList.remove("bar__btn--const"));

    this.classList.add("bar__btn--const");
  });
});
/////change animation based on viewport

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");

        removeActiveClasses();

        addActiveClass(sectionId);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));

//////////set the window to first section

window.addEventListener("load", () => {
  const firstSectionId = document.querySelector(".about").getAttribute("id");

  removeActiveClasses();
  addActiveClass(firstSectionId);

  document.querySelector(`#${firstSectionId}`).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/////////scrolling
scrollLinks.forEach((link) =>
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const sectionId = this.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
    });
  })
);
