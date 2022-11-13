const playVideoButton = document.getElementsByClassName('main-page_video');
const videoWrapper = document.getElementsByClassName('video-wrapper');
const closeCross = document.getElementsByClassName('close-cross');
const videoContainer = document.getElementsByClassName('video-container');

playVideoButton[0].onclick = function () {
   videoWrapper[0].classList.add('active');
   
   document.addEventListener('keydown', function(e) {
      if( e.keyCode  == 27 ){
         videoWrapper[0].classList.remove('active'); 
      }
   }); 
}

document.onclick = function (e) {
   if ((e.target.className === "video") || (e.target.className === "close-cross")) {
      videoWrapper[0].classList.remove('active'); 
   };
};
