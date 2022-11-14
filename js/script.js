const playVideoButton = document.getElementsByClassName('main-page_video');
const videoWrapper = document.getElementsByClassName('video-wrapper');
const images = document.querySelectorAll('.slider .slider-item');
const img = document.querySelectorAll('.slider .slider-item img');
const sliderTrack = document.querySelectorAll('.slider-track');
const input = document.querySelectorAll('form .input-wrapper div input');
const label = document.querySelectorAll('form .input-wrapper div label');
const submit = document.querySelectorAll('form > input');
const form = document.querySelectorAll('.form');
const successForm = document.querySelectorAll('.form .success-from-wrapper');
const body = document.querySelectorAll('body');


input[2].addEventListener('input', function () {
   let x = input[2].value;
   x = x.replace(/^\+7 /, '');
   x = x.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
   x = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '');
   x = x.startsWith('+7 ') ? x : '+7 ' + x;
   input[2].value = x;
});
 
submit[0].onclick = function (e) {
   e.preventDefault();
   if (input[0].value === '') {
      label[0].classList.add('error');
      input[0].classList.add('error');
      label[0].innerHTML = 'Это поле не может быть пустым';
   }
   if (!input[1].value) {
      label[1].classList.add('error');
      input[1].classList.add('error');
      label[1].innerHTML = 'Это поле не может быть пустым';
   }
   if (!input[1].value.includes('@') && (input[1].value)) {
      label[1].classList.add('error');
      input[1].classList.add('error');
      label[1].innerHTML = 'Неверный формат e-mail';
   }
   if ((input[2].value.length !== 16) && (input[2].value.length > 3)) {
      label[2].classList.add('error');
      input[2].classList.add('error');
      label[2].innerHTML = 'Невалидный номер телефона';
   }
   if ((input[1].value) && (input[1].value.includes('@') && (input[1].value))
      && ((input[2].value.length === 16) || (input[2].value.length <= 3))) {
      [...form[0].children].slice(1, 6).forEach(item => {
         item.style.display = 'none';
      })
      successForm[0].style.display = 'block';
   } 
}

input[0].addEventListener("focus", function () {
   label[0].classList = 'active';
   input[0].classList = 'active';
   input[0].placeholder = '';
   label[0].innerHTML = 'Имя и Фамилия*';
})
input[0].addEventListener("blur", function () {
   label[0].classList.remove('active');
   input[0].placeholder = 'Имя и Фамилия*';
})
input[1].addEventListener("focus", function () {
   label[1].classList = 'active';
   label[1].innerHTML = 'E-mail адрес*';
   input[1].classList = 'active';
   input[1].placeholder = '';
})
input[1].addEventListener("blur", function () {
   label[1].classList.remove('active');
   input[1].placeholder = 'E-mail адрес*'; 
})
input[2].addEventListener("focus", function () {
   label[2].classList = 'active';
   label[2].innerHTML = 'Телефон';
   input[2].classList = 'active';
   input[2].placeholder = '';
})
input[2].addEventListener("blur", function () {
   label[2].classList.remove('active');
   input[2].placeholder = 'Телефон';
})


let count = 0;
let width;
let height;
let prevSlide, currentSlide, nextSlide;

prevSlide = images[images.length - 1]
nextSlide = images[count + 1]
currentSlide = images[count]
function addSliderItemClass() {
   currentSlide.classList = 'slider-item current-slide';
   prevSlide.classList = 'slider-item prev-slide';
   nextSlide.classList = 'slider-item next-slide';
}
function init() {
   addSliderItemClass()
   width = window.screen.width
   sliderTrack[0].style.width = width + images.offsetWidth + 'px';
   img.forEach(item => {
      item.style.width = width / 2 + 'px';
      item.style.height = 'auto'
   })
   height = img[0].offsetHeight
   sliderTrack[0].style.height = height + 'px'
}
window.addEventListener('resize', init)

document.querySelectorAll('.slider-next')[0].addEventListener('click', function () {
   count++;
   if (count >= images.length) {
      count = 0;
      prevSlide = images[images.length - 1];
      nextSlide = images[count + 1];
      currentSlide = images[count];
   } else {
      if (count === images.length - 1) {
         prevSlide = images[count - 1];
         nextSlide = images[0];
         currentSlide = images[count];
      } else {
         prevSlide = images[count - 1];
         nextSlide = images[count + 1];
         currentSlide = images[count];
      }
   }
   addSliderItemClass()
   sliderTrack[0].style.transform = 'translate(-' + sliderTrack[0].style.width / 2 + 'px)';
   
})

document.querySelectorAll('.slider-prev')[0].addEventListener('click', function () {
   count--;
   if (count < 0) {
      count = images.length - 1;
      prevSlide = images[count - 1];
      nextSlide = images[0];
      currentSlide = images[count];
   } else if (count === 0) {
      prevSlide = images[images.length - 1];
      nextSlide = images[count + 1];
      currentSlide = images[count];
   } else {
      prevSlide = images[count - 1];
      nextSlide = images[count + 1];
      currentSlide = images[count];
   }
   addSliderItemClass()
   sliderTrack[0].style.transform = 'translate(-' + sliderTrack[0].style.width + 'px)';
})
init()

playVideoButton[0].onclick = function () {
   videoWrapper[0].classList.add('active');
   body[0].classList.add('no-scrool');
   document.addEventListener('keydown', function(e) {
      if( e.keyCode  == 27 ){
         videoWrapper[0].classList.remove('active');
         body[0].classList.remove('no-scrool');
      }
   }); 
}

document.onclick = function (e) {
   if ((e.target.className === "video") || (e.target.className === "close-cross")) {
      videoWrapper[0].classList.remove('active');
      body[0].classList.remove('no-scrool');
   };
};
