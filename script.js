// Landing Page
const engine = document.getElementById("engineSound");
const launch = document.querySelector(".launch-screen");
const hero = document.querySelector(".hero");

if(engine){
engine.play();
setTimeout(()=>{
launch.style.display="none";
hero.classList.remove("hidden");
},2500);
}

const enter = document.getElementById("enter");
if(enter){
enter.addEventListener("click",()=>{
engine.play();
setTimeout(()=>{
window.location.href="track.html";
},1000);
});
}

// Track Mode

const rev = document.getElementById("revSound");

function showSection(type){

if(rev) rev.play();

const car = document.getElementById("carDisplay");
const content = document.getElementById("contentDisplay");

let img="";
let text="";

if(type==="about"){
img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/teams/2024/mercedes";
text="<h2>About Me</h2><p>Driven CSBS student passionate about building powerful web systems and AI-based tools with secure architecture.</p>";
}

if(type==="skills"){
img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/teams/2024/ferrari";
text="<h2>Skills</h2>"+
rpm("HTML",90)+
rpm("CSS",85)+
rpm("JavaScript",80)+
rpm("PHP",70)+
rpm("SQL",75);
}

if(type==="projects"){
img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/teams/2024/mclaren";
text="<h2>Projects</h2><p><b>Fool's Gold AI</b> – AI Trading Fraud Detector<br><b>LSC Employee Portal</b> – Attendance & Management System</p>";
}

if(type==="internships"){
img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/teams/2024/aston-martin";
text="<h2>Internships</h2><p>Prodigy Infotech – Cybersecurity<br>Logistics Sector Skill Council – Web Development</p>";
}

if(type==="certifications"){
img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/teams/2024/alpine";
text="<h2>Certifications</h2><p>C Programming<br>Code Cubicle 5.0 Hackathon</p>";
}

if(type==="resume"){
img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/teams/2024/red-bull-racing";
text="<h2>Resume</h2><p>Add your Google Drive resume link here.</p>";
}

car.style.backgroundImage=`url(${img})`;
content.innerHTML=text;
}

function rpm(name,value){
return `<p>${name}</p>
<div class="rpm">
<div class="rpm-fill" style="width:${value}%"></div>
</div>`;
}
