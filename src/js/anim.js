/* HEADER */
/*const header = document.querySelectorAll(".header");

window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });

    TL.staggerFrom(header, 1.5, { top: -200, opacity: 0, ease: "power2.out" }, 0);

    TL.play();
})*/

/* Animation d'apparition du header et du bouton scrolltop */
function scrollFunction() {

    //Get the button:
    mybutton = document.getElementById("scrollTopBtn");
    myheader = document.getElementById("header");
    myheadermenu = document.getElementsByClassName("menu-elem");

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybutton.style.display = "block";
        myheader.style.backgroundColor = "rgba(0,0,0,0.8)";

        for (i = 0; i < myheadermenu.length; i++) {
            myheadermenu[i].style.color = "white";
            myheadermenu[i].onmouseover = function () {
                this.style.color = "#08dcb4";
            }
            myheadermenu[i].onmouseout = function () {
                this.style.color = "white";
            }
        }
    } else {
        mybutton.style.display = "none";
        myheader.style.backgroundColor = "rgba(0,0,0,0)";
        for (i = 0; i < myheadermenu.length; i++) {
            myheadermenu[i].style.color = "#333";
            myheadermenu[i].onmouseover = function () {
                this.style.color = "#08dcb4";
            }
            myheadermenu[i].onmouseout = function () {
                this.style.color = "#333";
            }
        }
    }
}

var barmin, barmax;

/* Animation des barres de langages */
function fillProgress() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        barmin = 0; barmax = 3000;
    }
    else {
        barmin = 700; barmax = 1500;
    }

    if (document.documentElement.scrollTop > barmin && document.documentElement.scrollTop < barmax) {
        setTimeout(function () {
            $('.c').val(95);
        }, 0);
        setTimeout(function () {
            $('.java').val(75);
        }, 200);
        setTimeout(function () {
            $('.python').val(70);
        }, 400);
        setTimeout(function () {
            $('.html5').val(60);
        }, 600);
        setTimeout(function () {
            $('.css').val(60);
        }, 800);
        setTimeout(function () {
            $('.php').val(75);
        }, 1000);
    }
    else {
        $('.c').val(0);
        $('.java').val(0);
        $('.python').val(0);
        $('.html5').val(0);
        $('.css').val(0);
        $('.php').val(0);
    }

}

var aboutAnimated = false;
var worksAnimated = false;
var citationAnimated = false;

var hellomin, hellomax, aboutmin, workmin, citmin;

/* Animation des blocs */
function animHero(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        hellomin = -1000; hellomax = 3000;
        aboutmin = 0;
        workmin = 0;
        citmin = 0;
    }
    else {
        hellomin = 300; hellomax = 1200;
        aboutmin = 600;
        workmin = 1000;
        citmin = 2500;
    }
    /*else {
        hellomin = 0; hellomax = 500;
        aboutmin = 300;
        workmin = 1000;
        citmin = 2800;
    }*/

    if (document.documentElement.scrollTop > hellomin && document.documentElement.scrollTop < hellomax) {
        const TL = gsap.timeline();
        TL
        .to('.hello .title', {y: 0, duration: 1, ease: 'power2.out'})
        .to('.hello .subtitle', {y: 0, duration: 1, ease: 'power2.out'}, '-=0.8')
        
        $('#heroPhoto').css("transform", "scale(1)");
    }
    else{
        $('#heroPhoto').css("transform", "scale(0)");
    }
    if(!aboutAnimated && document.documentElement.scrollTop > aboutmin){
        const TL = gsap.timeline();
        TL
        .to('.about', {y: 0, duration: 1.3, ease: 'power2.out'} , '+=0.5');
        aboutAnimated = true;
    }
    if (!worksAnimated && document.documentElement.scrollTop > workmin){
        const TL = gsap.timeline();
        TL
        .to('.works', {y: 0, duration: 1.3, ease: 'power2.out'}, '+=0.5');
        worksAnimated = true;
    }
    if (!citationAnimated && document.documentElement.scrollTop > citmin){
        const TL = gsap.timeline();
        TL
        .to('.hello .citation', {y: 0, duration: 1.3, ease: 'power2.out'}, '+=0.5');
        citationAnimated = true;
    }
}