// (function () {
//   "use strict";

//   $('[data-toggle="sidebar"]').click(function (event) {
//     event.preventDefault();
//     $(".app").toggleClass("sidebar-toggled");
//   });
// })();
// function toggleClass(elem, className) {
//   if (elem.className.indexOf(className) !== -1) {
//     elem.className = elem.className.replace(className, "");
//   } else {
//     elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
//   }

//   return elem;
// }

// function toggleDisplay(elem) {
//   const curDisplayStyle = elem.style.display;

//   if (curDisplayStyle === "none" || curDisplayStyle === "") {
//     elem.style.display = "block";
//   } else {
//     elem.style.display = "none";
//   }
// }

// function toggleMenuDisplay(e) {
//   const dropdown = e.currentTarget.parentNode;
//   const menu = dropdown.querySelector(".menu");
//   const icon = dropdown.querySelector(".fa-angle-right");

//   toggleClass(menu, "hide");
//   toggleClass(icon, "rotate-90");
// }

// function handleOptionSelected(e) {
//   toggleClass(e.target.parentNode, "hide");

//   const id = e.target.id;
//   const newValue = e.target.textContent + " ";
//   const titleElem = document.querySelector(".dropdown .title");
//   const icon = document.querySelector(".dropdown .title .fa");

//   titleElem.textContent = newValue;
//   titleElem.appendChild(icon);

//   //trigger custom event
//   document.querySelector(".dropdown .title").dispatchEvent(new Event("change"));
//   //setTimeout is used so transition is properly shown
//   setTimeout(() => toggleClass(icon, "rotate-90", 0));
// }

// function handleTitleChange(e) {
//   const result = document.getElementById("result");

//   result.innerHTML = "The result is: " + e.target.textContent;
// }

// //get elements
// const dropdownTitle = document.querySelector(".dropdown .title");
// const dropdownOptions = document.querySelectorAll(".dropdown .option");

// //bind listeners to these elements
// dropdownTitle.addEventListener("click", toggleMenuDisplay);

// dropdownOptions.forEach((option) =>
//   option.addEventListener("click", handleOptionSelected)
// );

// document
//   .querySelector(".dropdown .title")
//   .addEventListener("change", handleTitleChange);

//  slide show
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("myslides");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[1].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }

// google map
function initMap() {
  var options = {
    zoom: 8,
    center: { lat: 6.465422, lng: 3.406448 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
    position: { lat: 6.55136, lng: 3.266265 },
    map: map,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  });
}
