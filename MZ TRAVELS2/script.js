const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // We use -150 to account for the header height
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    
    // Get the ID from href (e.g., "#national" becomes "national")
    const linkId = link.getAttribute("href").split("#")[1];

    // STRICT MATCH: Only highlight if the strings are exactly the same
    if (linkId === current) {
      link.classList.add("active");
    }
  });
});
