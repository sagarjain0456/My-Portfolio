function menuSlide() {
  document.getElementById('mid-navbar').style.left = '0px';
  document.getElementById('menu-cross-icon').style.display = 'inline-block';
    document.getElementById('mid-navbar').style.transition = 'all 0.3s ease';
}

function menuSlideHide() {
  document.getElementById('mid-navbar').style.left = '-500px';
  document.getElementById('menu-cross-icon').style.display = 'none';
  document.getElementById('mid-navbar').style.transition = 'all 0.3s ease';
}

function aboutMeReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("about-me-read-more-btn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function EducationClicked(){
  document.getElementById('about-me-education-content').style.display = 'block';
  document.getElementById('about-me-skill-content').style.display = 'none';
  document.getElementById('about-me-achievements-content').style.display = 'none';
  var skillsHeadingElement = document.getElementById("skills-heading");
  skillsHeadingElement.classList.remove("active-link");
  var educationHeadingElement = document.getElementById("education-heading");
  educationHeadingElement.classList.add("active-link");
  var achievementsHeadingElement = document.getElementById("achievements-heading");
  achievementsHeadingElement.classList.remove("active-link");
}

function SkillsClicked(){
  document.getElementById('about-me-skill-content').style.display = 'block';
  document.getElementById('about-me-education-content').style.display = 'none';
  document.getElementById('about-me-achievements-content').style.display = 'none';
  var skillsHeadingElement = document.getElementById("skills-heading");
  skillsHeadingElement.classList.add("active-link");
  var educationHeadingElement = document.getElementById("education-heading");
  educationHeadingElement.classList.remove("active-link");
  var achievementsHeadingElement = document.getElementById("achievements-heading");
  achievementsHeadingElement.classList.remove("active-link");
}

function AchievementsClicked(){
  document.getElementById('about-me-achievements-content').style.display = 'block';
  document.getElementById('about-me-skill-content').style.display = 'none';
  document.getElementById('about-me-education-content').style.display = 'none';
  var achievementsHeadingElement = document.getElementById("achievements-heading");
  achievementsHeadingElement.classList.add("active-link");
  var educationHeadingElement = document.getElementById("education-heading");
  educationHeadingElement.classList.remove("active-link");
  var skillsHeadingElement = document.getElementById("skills-heading");
  skillsHeadingElement.classList.remove("active-link");
}
