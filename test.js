/* const accordion = document.querySelectorAll(".content-container");

accordion.forEach((link) => {
  link.addEventListener("click", function () {
    let menu = [];
    menu = document.querySelectorAll(".answer");
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].classList.contains("hidden")) {
        menu[i].classList.remove("hidden");
      } else {
        menu[i].classList.add("hidden");
      }
    }
  });
});
reason this will not work is because link= will always chose the whole array instead of just one index of it so its best to just use the lower scenerio 
 */


const accordion = document.getElementsByClassName("content-container");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active"); 
});
}

/* if the .content-container contains other elements, such as buttons, images, or text, and you click on one of those, e.target will be the specific element you clicked on, while this will still be the .content-container.

    Conclusion:
    In your specific scenario, this and e.target might refer to the same element if the click is directly on the .content-container. However, if you have child elements inside the .content-container and click on one of those, e.target would point to that child, while this would still refer to the .content-container. */
