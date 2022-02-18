$(document).ready(function(){
    const headerScrollCheck = () => {
        let header = $(".js-user-fixed");
        let footer = $(".js-form-fixed");
        let firstBlockHeight = $(".js-header-trigger").offset().top +$(".js-header-trigger").height();
        let paddingTopHeight = $(".js-header-trigger").offset().top ;
        
        console.log(firstBlockHeight)
        if ($(document).scrollTop() > firstBlockHeight) {
            $('.resume').css('paddingTop', 'paddingTopHeight');
            header.addClass("fixed");
            footer.addClass("fixed");
        } else {
            header.removeClass("fixed");
            footer.removeClass("fixed");
        }
    }
    $(window).scroll(function() {
        headerScrollCheck()
    });
});