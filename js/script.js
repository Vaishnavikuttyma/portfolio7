sr.reveal('.home-img',{delay:1000, origin:'right'});
const header =document.querySelector("header")

window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky", window.scrolly > 0);

}
);

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
  };

const sr = ScrollReveal(
    {
        distance:'25px',
        duration: 2500,
        reset: true
    })


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

sr.reveal('.home-text',{delay:190, origin:'bottom'});
sr.reveal('.about,.services,.portfoli0,.contact',{delay:200, origin:'bottom'});