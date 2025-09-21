
function hamburger() {
  const menu = document.querySelector(".hamburger-hide");
  menu.classList.toggle("hamburger-show");
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from submitting
  const captcha = document.getElementById("captcha").value;
  if (captcha !== "7") {
    alert("Captcha answer is incorrect!");
    return;
  }
  alert("Form submitted successfully!");
  this.reset();
});
