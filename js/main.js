var elementsToFade = [$('#bmorehoods'), $('#resume'), $('#headshot')],
    headerElements = [$('#header'), $('#logo'), $('#nav-list'), $('#nav-icon-cont')];

// Open nav menu when the hamburger icon is clicked
var menu = $('#nav-icon'),
main = $('main'),
drawer = $('#nav-list');

menu.on('click', function(e) {
    drawer.toggleClass('open');
    e.stopPropagation();
});

main.on('click', function() {
    drawer.toggleClass('open');
});

// Shrink navigation & animate header opacity, title & subtitle on scroll
function headerAnimate() {
    var distanceY = $(window).scrollTop(),
    winWidth = $(window).width(),
    docWidth = $(document).width(),
    shrinkOn = 300;

    for (i = 0; i < headerElements.length; i++) {
        if (distanceY > shrinkOn) {
            headerElements[i].addClass('smaller');
        } else {
            if (distanceY <= shrinkOn) {
                headerElements[i].removeClass('smaller');
            }
        }
    }

    // Animate header text
    var title = $('#title'),
        subtitle = $('#subtitle'),
        mainImg = $('#main-img');

    title.css( { opacity : (1 / distanceY) * 200 - 0.4 } );
    subtitle.css( { opacity : (1 / distanceY) * 200 - 0.4 } );
    mainImg.css( { opacity : (1 / distanceY) * 200 - 0.25 } );

    if (winWidth > 767) {
        title.css( { marginRight : distanceY } );
        title.css( { marginBottom : (distanceY / 4) } );
        subtitle.css( { marginLeft : distanceY } );
        subtitle.css( { marginTop : (distanceY / 4) } );
    }

    if (title.css('opacity') == 0) {
        title.css( { 'display' : 'none' } );
        subtitle.css( { 'display' : 'none'  } );
    } else {
        title.css( { 'display' : 'block' } );
        subtitle.css( { 'display' : 'block'  } );
    }
}

// Fade in images when visible
function fadeIn(elem) {
    for (i = 0; i < elementsToFade.length; i++) {
        if (($(window).scrollTop() + ($(window).height())) > elementsToFade[i].offset().top + 225) {
            elementsToFade[i].fadeTo(700, 1);
        }
    }
}

$(window).on('scroll', function(){
   headerAnimate();
   fadeIn(elementsToFade);
});