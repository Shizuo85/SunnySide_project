function openMenu() {
  var x = document.getElementById("menu");
  if (x.classList.contains("hide") === true) {
    x.classList.toggle("show");
  }
  else {
    return x.classList.toggle("hide");
  }
}