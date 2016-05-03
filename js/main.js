function shrinkNav() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.getElementById('header'),
            logo = document.getElementById('logo'),
            navList = document.getElementById('nav-list'),
            navIcon = document.getElementById('nav-icon-cont');
        if (distanceY > shrinkOn) {
            header.className += ' smaller';
            logo.className += ' smaller';
            navList.className += ' smaller';
            navIcon.className += ' smaller';
        } else {
            if (distanceY <= shrinkOn) {
                header.className -= ' smaller';
                logo.className -= ' smaller';
                navList.className -= ' smaller';
                navIcon.className -= ' smaller';
            }
        }
    });
}

window.onload = shrinkNav();

/* Sticky shrinking nav bar

function shrinkNav() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300;
        if (distanceY > shrinkOn) {
            document.getElementById('header').classList.toggle('smaller');
            document.getElementById('logo').classList.toggle('smaller');
            document.getElementById('nav-list').classList.toggle('smaller');

            document.getElementById('nav-icon').classList.toggle('smaller');
        } else {
            if (distanceY <= shrinkOn) {
                document.getElementById('header').classList.remove('smaller');
                document.getElementById('logo').classList.remove('smaller');
                document.getElementById('nav-list').classList.remove('smaller');

                document.getElementById('nav-icon').classList.remove('smaller');
            }
        }
    });
}
*/

  /* Open nav menu when the hamburger icon is clicked. */
    var menu = document.querySelector('#nav-icon');
    var main = document.querySelector('main');
    var drawer = document.querySelector('#nav-list');

    menu.addEventListener('click', function(e) {
      drawer.classList.toggle('open');
      e.stopPropagation();
    });
    main.addEventListener('click', function() {
      drawer.classList.remove('open');
    });