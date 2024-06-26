const skills = document.querySelectorAll(".skills");
const tools = document.querySelectorAll(".tools");
const skillsToolsToggle = document.querySelector(".skills-tools-toggle");
const toggleTheme = document.querySelector(".theme-toggle-inp");
const navbar = document.querySelector("navbar");



const inActive = (el) => {
  el.classList.toggle("hidden");
};

const active = (el) => {
  el.classList.remove("hidden");
};

skillsToolsToggle.addEventListener("change", function () {
  if (skillsToolsToggle.checked) {
    skills.forEach((skill) => {
      inActive(skill);
    });
    tools.forEach((tool) => {
      active(tool);
    });
  } else {
    tools.forEach((tool) => {
      inActive(tool);
    });
    skills.forEach((skill) => {
      active(skill);
    });
  }
});


toggleTheme.addEventListener("change", function switchTheme(){

if(toggleTheme.checked === true){
 document.body.classList.add('light');

  
}
 else{
  document.body.classList.remove('light');
 
 }
  
 
})