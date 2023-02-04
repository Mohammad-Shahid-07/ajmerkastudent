// Nav Bar
const navList = document.querySelector(".nav-list")
const navItem = document.querySelector(".nav-item")
const ham = document.querySelector(".hamburger")


ham.addEventListener("click", e =>{
  navList.classList.toggle("toggle")
  ham.classList.toggle('active');
})

// slides
// const slide = document.querySelector("#slide").addEventListener("click", e =>{ console.log("clicked");})
const collegeList = document.querySelectorAll(".course_design");

const sortColleges = () => {
  const colleges = [];

  collegeList.forEach(college => {
    colleges.push({
      name: college.querySelector(".cname").innerText,
      link: college.querySelector("a").href,
      image: college.querySelector("img").src
    });
  });

  colleges.sort((a, b) => a.name.localeCompare(b.name));

  colleges.forEach((college, index) => {
    collegeList[index].querySelector(".cname").innerText = college.name;
    collegeList[index].querySelector("a").href = college.link;
    collegeList[index].querySelector("img").src = college.image;
  });
};

sortColleges();





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


// preloder
window.onload = function() {
     const preloader = document.getElementById("preloder");
    preloader.style.display = "none";
  }


// Dark theam


const root = document.querySelector(':root');
const theamToggle = document.querySelector('.dark-toggle');
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  root.style.setProperty('--bg-color', '#0a0c11');
  root.style.setProperty("--text-color","#fff");
  root.style.setProperty("--nav-bg","#18181f");
    sun.style.display ="block"
    moon.style.display ="none"
  
  theamToggle.classList.add("dark");
} else {
    root.style.setProperty('--bg-color', '#fff');
    root.style.setProperty("--text-color","#0a0c11");
    root.style.setProperty("--nav-bg","#fff");
    sun.style.display ="none"
    moon.style.display ="block"
    theamToggle.classList.remove("dark");
}

theamToggle.addEventListener( 'click' , e =>{
    sun.classList.toggle('animate');
    
  if(theamToggle.classList.contains('dark')){
   
    root.style.setProperty('--bg-color', '#fff');
    root.style.setProperty("--text-color","#0a0c11");
    root.style.setProperty("--nav-bg","#fff");
    theamToggle.classList.remove("dark");

    moon.style.display ="block"
    sun.style.display ="none"
    localStorage.setItem('theme', 'light');

  
  }else{
    root.style.setProperty('--bg-color', '#0a0c11');
    root.style.setProperty("--text-color","#fff");
    root.style.setProperty("--nav-bg","#18181f");
    sun.style.display ="block"
    moon.style.display ="none"



    theamToggle.classList.add("dark");
    localStorage.setItem('theme', 'dark');
  }
});


