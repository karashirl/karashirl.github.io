/* Sticky shrinking nav bar */

function shrinkNav() {
    window.addEventListener('scroll', function(e) {
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