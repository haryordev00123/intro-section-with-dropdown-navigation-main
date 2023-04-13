const nav = document.querySelector('#mobile-side-nav');
const body = document.querySelector('body');

const toggleArr = document.getElementsByClassName('toggle-arr').src;

const dropBtn = document.getElementsByClassName('drop-btn');

function openNav(){
    nav.style.display = "block";
    nav.style.boxShadow = "-50% 0 0 3px rgba(0, 0, 0, 0.2)"
}

function closeNav(){
    nav.style.display = "none";
}

for(let i = 0; i < dropBtn.length; i++){
    dropBtn[i].onclick = function (){
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    }
}