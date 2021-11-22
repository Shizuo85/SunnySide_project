function openMenu() {
  var x = document.getElementsByClassName("details-onclick");
  if (x[0].classList.contains("hide") === true) {
    x[0].classList.toggle("show");
  }
  else {
    return x[0].classList.toggle("hide");
  }
}