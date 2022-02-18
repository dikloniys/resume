$(document).ready(function(){

    $(".js-popup-open").click(function(){
        $(".js-popup").addClass("active");
    });

    $( "js-slideUp-popup" ).click(function() {
        $( "js-popup" ).slideUp( "slow", function() {
        });
    });

    $(".js-portfolio-slide").click(function(){
        $(".js-popup-slider").addClass("active");
    });

    $(".js-popup-button").click(function(){
        $(this).hasClass('save');
        $(".js-popup").removeClass("active");
        $(".js-popup-slider").removeClass("active");
    });

    const popupSwiper = new Swiper('.js-popup-slider', {
        slidesPerView: 1,
        navigation: {
        nextEl: '.popup-button-next',
        prevEl: '.popup-button-prev',
        },
        pagination: {
            el: ".popup-pagination",
            type: "fraction",
        },
        
    });

        $(document).mouseup( function(e){ 
            var div = $( ".popup" ); 
            if ( div.is(e.target)) { 
                $(".js-popup").removeClass("active");
                $(".js-popup-slider").removeClass("active");
                    }
        });
    $(document).on('keyup', function(e) {
        if ( e.key == "Escape" ) {
            $(".js-popup").removeClass("active");
            $(".js-popup-slider").removeClass("active");
        }
    });
    $("a.grouped_elements").fancybox();
}); 
