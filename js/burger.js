//* script Menu Burger

var burger = document.getElementById("menuBurger");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  burger.classList.add("active");
  closeT();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  burger.classList.remove("active");
}

// Permet de refermer la navigation quand un choix a été fait 
function navigation(){
  burger.classList.remove("active");
}