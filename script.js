const skillsBtn = document.querySelector(".skills-btn");
const toolsBtn = document.querySelector(".tools-btn");
const pics = document.querySelectorAll(".pics");

function showSkills() {
    skillsBtn.addEventListener("click", function() {

        if(skillsBtn.clicked===true)
        pics.forEach(pic => {
            pic.classList.add("show-skills");
            pic.classList.remove("hide-skills");
        });
        console.log("clicked");

         if(toolsBtn.clicked === true){
            pics.forEach(pic => {
                pic.classList.add("hide-skills");
                
            });
        }
    });
}

showSkills();
