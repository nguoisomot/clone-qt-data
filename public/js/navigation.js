const hoverDropMenus = document.querySelectorAll(".hover-dropmenu");
hoverDropMenus.forEach((hoverDropMenuItem, i) => {
  hoverDropMenuItem.addEventListener("mouseover", event => {
    hoverDropMenuItem.classList.toggle("active");
    const showContentMenu = document.getElementsByClassName("dropmenu")[i];

    console.log(showContentMenu)

    showContentMenu.style.maxHeight = showContentMenu.scrollHeight + "px";
  });
  // no hover
  hoverDropMenuItem.addEventListener("mouseout", event => {
    hoverDropMenuItem.classList.toggle("active");
    const showContentMenu = document.getElementsByClassName("dropmenu")[i];

    showContentMenu.style.maxHeight = 0;
  });
});


// ======= Menu Mobile =======

const hoverDropMenusMobile = document.querySelectorAll(".toggle");
var expandToggle2 = document.getElementsByClassName("dropmenu_mobile")[1];
hoverDropMenusMobile.forEach((hoverDropMenuMobileItem, i) => {
  hoverDropMenuMobileItem.addEventListener("click", event => {
    hoverDropMenuMobileItem.classList.toggle("active");
    const showContentMenuMobile = document.getElementsByClassName("dropmenu_mobile")[i];
    console.log(showContentMenuMobile)
    console.log(i)
    
    if (hoverDropMenuMobileItem.classList.contains("active")) {
      showContentMenuMobile.style.maxHeight = showContentMenuMobile.scrollHeight +20000+ "px";
      if (i == 2 || i == 3) {
        console.log("or");
        expandToggle2.style.maxHeight += showContentMenuMobile.scrollHeight*5 + "px";
      }

    }
    else {
      showContentMenuMobile.style.maxHeight = 0;
    }



  });
});
// show menu mobile
var toggleBar = document.getElementById('bar');
var menuMobile = document.getElementsByClassName('main-header_mobile')[0]; 
console.log(toggleBar);
toggleBar.addEventListener('click',event =>{
  menuMobile.classList.toggle('toggle_display') 
})