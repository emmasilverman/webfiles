var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
  // var vg1 = document.getElementById("vg1");
  // vg1.play()
  // vg1.volume = 0.5;
  //
  // vg1.addEventListener('click', function (){
  //   if (vg1.paused == false){
  //     vg1.pause();
  //     vg1.firstChild.nodeValue="Play";
  //   } else {
  //     vg1.play();
  //     vg1.firstChild.nodeValue = "Pause";
  //   }
  // });
//   var vid = document.getElementById("vg2_2");
//
//   function playVid(){
//     vid.play();
//   }
//
//   function pauseVid(){
//     vid.pause();
//   }
//
// var vid = document.getElementById("vg1_1");
// function playVid(){
//   vid.play();
// }
// function pauseVid(){
//   vid.pause();
// }
// var vid = document.getElementById("myVideo1");
//
// function playVid() {
//   vid.play();
// }
//
// function pauseVid() {
//   vid.pause();
// }

// function loopVideo() {
// 	 // allows video pulled to a stack
// 	 video.getVideo().play(pointerToVideo, 'Video', -->Image.videoPdb);
// }
