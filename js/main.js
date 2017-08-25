// var elementsToFade = [$('.projects').find('.project-blurb'), $('#headshot')],
//     headerElements = [$('#header'), $('#logo'), $('#nav-list'), $('#nav-icon-cont')];

// Open nav menu when the hamburger icon is clicked
// var menu = $('#nav-icon'),
// main = $('main'),
// drawer = $('#nav-list');

// menu.on('click', function(e) {
//     drawer.toggleClass('open');
//     e.stopPropagation();
// });

// main.on('click', function() {
//     drawer.removeClass('open');
// });

// Color overlay on project on hover

$('.project').hover(
    function(e) {
        var projInner = $(this).find('.project-inner');
        // var randomNum = Math.floor((Math.random() * 3) + 1);
        var color = 'rgba(213, 231, 96, 0.6)';

        // switch (randomNum) {
        //     case 1:
        //         color = 'rgba(105, 105, 105, 0.6)'; // Dark Gray
        //         break;
        //     case 2:
        //         color = 'rgba(213, 231, 96, 0.6)'; // Lime
        //         break;
        //     case 3:
        //         color = 'rgba(34, 33, 122, 0.6)'; // Dark Royal Blue
        //         break;
        //     default:
        //         color = 'rgba(213, 231, 96, 0.6)';
        // };

        // if ( $(this).hasClass('active') == false ) {
            projInner.css('background-color', color);
            projInner.toggleClass('hover');
        // }
    }
);

$('.nav-item').click(
    function(e) {
        var pageId = $(this).attr('href');

        $('body').animate({
            scrollLeft: $(pageId).offset().left
        }, 500);

        // var page = pageId.slice(1);
        // var pageClass = '.' + page;
        // var pageNav = $(pageId).find('.nav ' + pageClass + ' a');

        // pageNav.addClass('active');
    }
);

$('.project').click(
    function(e) {
        var target = $(this);
        var scrollPosition = $('.slider-work').scrollTop();
        projAnimate(target, scrollPosition);
    }
);

function projAnimate(target, scrollPosition) {
    $('.slider-work').animate({
        scrollTop: 0
    }, 0);

    var workGrid = $('.slider-work .grid-container');
    var featuredContainer = $('.featured-container');
    var summaryContainer = $('.summary-container');
    var projData = target.attr('data-project');
    var featuredProj = featuredContainer.find("[data-project='" + projData + "']");
    var featuredSummary = summaryContainer.find("[data-project='" + projData + "']");

    workGrid.addClass('active');

    featuredContainer.find('.selected').removeClass('selected');
    featuredProj.addClass('selected');

    summaryContainer.find('.selected').removeClass('selected');
    featuredSummary.addClass('selected');

    $('.back').click(
        function(e) {
            $('.slider-work').animate({
                scrollTop: scrollPosition
            }, 0);

            workGrid.removeClass('active');

            featuredContainer.find('.selected').removeClass('selected');
            featuredContainer.find('.project-1').addClass('selected');

            summaryContainer.find('.selected').removeClass('selected');
        }
    );
};

// Fade in images when visible
// function fadeIn(elem) {
//     for (i = 0; i < elementsToFade.length; i++) {
//         if (($(window).scrollTop() + ($(window).height())) > $(elementsToFade[i]).offset().top + 200) {
//             $(elementsToFade[i]).fadeTo(700, 1);
//         }
//     }
// }

// $(window).on('scroll', function($){
//     fadeIn(elementsToFade);
// });