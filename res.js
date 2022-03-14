burger= document.querySelector('.burger');
navbar= document.querySelector('.navbar');
leftnav= document.querySelector('.leftnav');
rightnav= document.querySelector('.rightnav');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-res');
    leftnav.classList.toggle('v-list-res');
    rightnav.classList.toggle('v-list-res');

})