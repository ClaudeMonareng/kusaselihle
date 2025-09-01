
// TOGGLE NAVBAR

  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {

    navigation.classList.remove("active");
})

// now, we will fix navigation issue...menu close after clicked any link

function toggleMenu() {
    menuBtn.classList.remove('active');
    navigation.classList.remove('active');
}

// STICKY NAVBAR                            
// NAVIGATION BAR EFFECTS ON SCROLL 

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
