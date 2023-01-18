// Бургер
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


// Модальное окно
let modal = document.getElementById('myModal');
let btn1 = document.getElementById('myBtn1');
let btn2 = document.getElementById('myBtn2');
let span = document.getElementsByClassName('close')[0];


btn1.onclick = function() {
    modal.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}

span.onclick = function() {
    modal.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = 'auto';
    }
}

btn2.onclick = function() {
    modal.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}