

const links=document.querySelectorAll(".nav-link")
links.forEach(link => {
  link.addEventListener("click",function(){
    links.forEach(lnk=> lnk.classList.remove("active"));
    this.classList.add("active");
  });
});
burger=document.querySelector(".burger");
list=document.querySelector(".link-list");
nav=document.querySelector("nav");
navItems=document.querySelectorAll(".nav-items");
burger.addEventListener("click",function(){
  navItems.forEach(navItem =>navItem.classList.toggle("v-class-resp"));
  list.classList.toggle(".display");
  nav.classList.toggle("h-nav");
  })
