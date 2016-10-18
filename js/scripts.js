function reorderToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
    document.getElementById("menu-content").className = "dropdown-content";
  }
}
function navMenuToggle() {
  var x = document.getElementById("menu-content");
  if (x.className === "dropdown-content") {
    x.className += " nav-show";
  } else {
    x.className = "dropdown-content";
  }
}
