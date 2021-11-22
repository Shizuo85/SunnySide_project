function openMenu() {
  var x = document.getElementsByClassName("details-onclick");
  if (x.classList.contains("hide") === true) {
    x.classList.toggle("show");
  }
  else {
    return x.classList.toggle("hide");
  }
}