$(document).ready(function () {

    var active = $(".nav-list li");
    active.hover(function () {
        // $(this).addClass("active-nav")
        // active.not(this).removeClass("active-nav");
        $(this).addClass('active-nav');
        $(this).siblings().removeClass('active-nav');
    });

        $('#lightSlider').lightSlider({
            item: 1,
            adaptiveHeight: true,
            slideMove: 1,
            speed: 1000,
            slideMargin: 0,

            auto: false,
            loop: true,
            slideEndAnimation: true,
            pause: 2000,

            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            responsive : [
                {
                    breakpoint:767,
                    settings: {
                        item:1,
                        slideMove:1,
                        loop:true,
                            auto: true,
                        vertical:true,
                        controls:false
                    }
                }
        ]
        });

    $(".content-list li").hover(function(){
        var indexItem = $(this).index();
        $('.content-text').eq(indexItem).fadeToggle(500);
        $('.hover-block').eq(indexItem).fadeToggle(500);
    });



   var grid = $('.masonry-container').masonry({
            itemSelector: '.item',
            columnWidth: 1,
            fitWidth:true
    });

    grid.imagesLoaded().progress( function() {
        grid.masonry();
    });


        $('#clients-slider').lightSlider({
            item: 8,
            adaptiveHeight: true,
            slideMove: 1,
            speed: 1000,
            slideMargin: 0,

            loop: true,
            slideEndAnimation: true,
            pause: 2000,

            controls: true,
            prevHtml: '',
            nextHtml: '',
            responsive : [
                {
                    breakpoint:767,
                    settings: {
                        item:4,
                        slideMove:1,
                        loop:true,
                        auto: true,
                        controls:false
                    }
                }
            ]

        });



});  // конец document.ready