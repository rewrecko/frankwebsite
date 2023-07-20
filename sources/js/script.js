
/*
var x = document.getElementById("ita");
var y = document.getElementById("eng");


function inglese() {
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
      }
}

function italiano() {
    if (x.style.display === "none") {
        x.style.display = "block"
        y.style.display = "none";
      }
}
*/

/*
function myFunction() {

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
  }
*/

var x = document.getElementById("ita");
var y = document.getElementById("eng");

var a = document.getElementById("ita_flag");
var b = document.getElementById("eng_flag");

function traduci() {
  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";
    b.style.display = "none"
    a.style.display = "block"

  } else if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    a.style.display = "none"
    b.style.display = "block"

  }

}
/*
function inglese() {
    document.getElementById("ita").style.display = "none";
    document.getElementById("eng").style.display = "block";
}

function italiano() {
    document.getElementById("ita").style.display = "block";
    document.getElementById("eng").style.display = "none";
}
*/