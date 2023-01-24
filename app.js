const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list');
const course = document.querySelector('.course');
hamburger.addEventListener('click', function() {
   this.classList.toggle('active')
   menu.classList.toggle('nav-list-menu');
})

// search
// search
const form = document.querySelector("form");
const input = document.querySelector("#search");
const notFound = document.querySelector("#not-found");
const searchContainer = document.querySelector(".search_container");

if(input && notFound && searchContainer) {
    input.addEventListener("input", (e) => {
        const searchTerm = input.value.toLowerCase();
        const courses = document.querySelectorAll(".course");
        let found = false;

        courses.forEach((course) => {
            const cname = course.querySelector(".cname");
            if (!cname.textContent.toLowerCase().includes(searchTerm)) {
                course.style.display = "none";
            } else {
                found = true;
                course.style.display = "block";
            }
        });

        if (!found) {
            notFound.style.display = "block";
        } else {
            notFound.style.display = "none";
        }
    });
}
