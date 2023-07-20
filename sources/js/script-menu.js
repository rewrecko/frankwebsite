var hamburger = document.getElementById("open");
var croce = document.getElementById("close");

function menu() {
  if (hamburger.style.display === "inline") {
    croce.style.display = "inline";
    hamburger.style.display = "none";

  } else if (hamburger.style.display === "none") {
    hamburger.style.display = "inline";
    croce.style.display = "none";

  }

}