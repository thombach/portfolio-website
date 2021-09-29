const loader = document.querySelector('.load-screen');
const header = document.querySelector('.header');
const bannerContent = document.querySelector('.banner-content');

$("body").css("overflow", "hidden");

window.addEventListener('load', () => {
    setTimeout(() => {  console.log("Starting..."); }, 2000);
    $("body").css("overflow", "visible");
    loader.classList.add('fondu-out');
    header.style.top = "0";
    bannerContent.classList.add('banner-fade');
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $('#heroPhoto').css("transform", "scale(1)");
        $('#heroHello, #heroIam, .about, .works, .hello .citation').css("transform", "translateY(0px)");
        $('.c').val(95);
        $('.java').val(75);
        $('.python').val(70);
        $('.html5').val(60);
        $('.css').val(60);
        $('.php').val(75);
    }
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function removeNotif() {
    var elem = document.getElementById("copyNotif");
    elem.style.visibility = "hidden";
}

function showNotif() {
    var elem = document.getElementById("copyNotif");
    elem.style.visibility = "visible";
}


/* -----------SCROLL ANIMATIONS--------------- */
window.onscroll = function () {
    var scroll = $(window).scrollTop();
    dh = $(document).height();
    wh = $(window).height();
    scrollPercent = (scroll / (dh-wh))*100;
    $("#progressbar").css('height', scrollPercent + '%');
    
    scrollFunction();
    fillProgress();
    animHero();
};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* CURSOR */
let innerCursor = document.querySelector('.inner-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a, button"));

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    })
})

window.addEventListener('click', (e) => {
    const circle = document.createElement('div');
    circle.className = 'clickAnim';
    circle.style.top = `${e.pageY - 20}px`;
    circle.style.left = `${e.pageX - 20}px`;
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 1500)
})
