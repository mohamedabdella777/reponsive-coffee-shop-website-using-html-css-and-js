//header section
let menubtn = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .navbar'); 
menubtn.onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitemscontainer .classList.remove('active')
}

let cartbtn = document.querySelector('#cart-btn'); 
let cartitemscontainer = document.querySelector('.header .cart-items-container'); 
cartbtn.onclick = () => {
cartitemscontainer .classList.toggle('active');
navbar.classList.remove('active');
searchform.classList.remove('active');

}

let fasearch = document.querySelector('.fa-search'); 
let searchform = document.querySelector('.search-form'); 
fasearch.onclick = () => {
searchform.classList.toggle('active');
navbar.classList.remove('active');
cartitemscontainer .classList.remove('active');
}

window.onscroll = () =>{
navbar.classList.remove('active');
searchform.classList.remove('active');
cartitemscontainer .classList.remove('active');
}

