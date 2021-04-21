// Js for carousal
let currentIndex = 1;
showSlides(currentIndex);
function index(n) {
    currentIndex = n;
    showSlides(currentIndex);
}
function newIndex(n) {
    currentIndex += n;
    showSlides(currentIndex);
}
function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let circles = document.getElementsByClassName('circle');
    if(n>slides.length)
    {
        n = 1;
    }
    else if(n==0)
    {
      n = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < slides.length; i++) {
        circles[i].classList.remove('active');
    }
   
    circles[n-1].classList.add('active');
    slides[n-1].style.display = "block";

}


