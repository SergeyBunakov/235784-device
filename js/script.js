var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var mapOverlay = document.querySelector(".modal-overlay");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    mapOverlay.classList.add("modal-content-show");
      });

    mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
        mapOverlay.classList.remove("modal-content-show");
      });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });

var formOpen = document.querySelector(".js-open-contactform");

var formPopup = document.querySelector(".modal-content-form");
var formClose = formPopup.querySelector(".modal-content-close");
var formOverlay = document.querySelector(".modal-overlay");

formOpen.addEventListener("click", function(event) {
    event.preventDefault();
    formPopup.classList.add("modal-content-show");
    formOverlay.classList.add("modal-content-show");
      });

    formClose.addEventListener("click", function(event) {
        event.preventDefault();
        formPopup.classList.remove("modal-content-show");
        formOverlay.classList.remove("modal-content-show");
      });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (formPopup.classList.contains("modal-content-show")) {
            formPopup.classList.remove("modal-content-show");
          }
        }
      });



var subOpen = document.querySelector(".submenu-open");
var subPopup = document.querySelector(".submenu-catalog");
var mainMenuNull = document.querySelector(".main-menu-header");
 
 
subOpen.addEventListener("click", function (event) {
  if(!subPopup.classList.contains("modal-content-show")) {
    subPopup.classList.add("modal-content-show");
    mainMenuNull.classList.add("main-menu-header-sub");
  }
  else {
    subPopup.classList.remove("modal-content-show");
    mainMenuNull.classList.remove("main-menu-header-sub");
  }
});