/* Sticky shrinking nav bar */

function shrinkNav() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset ||   document.documentElement.scrollTop,
            shrinkOn = 300;
        if (distanceY > shrinkOn) {
            document.getElementById("header").className += " smaller";
            document.getElementById("logo").className += " smaller";
        } else {
            if (distanceY <= shrinkOn) {
                document.getElementById("header").className -= " smaller";
                document.getElementById("logo").className -= " smaller";
            }
        }
    });
}

window.onload = shrinkNav();

/* Open nav menu when the hamburger icon is clicked. */

var menu = document.querySelector('#header_menu');
    var main = document.querySelector('main');
    var drawer = document.querySelector('nav');

    menu.addEventListener('click', function(e) {
      drawer.classList.toggle('open');
      e.stopPropagation();
    });
    main.addEventListener('click', function() {
      drawer.classList.remove('open');
    });