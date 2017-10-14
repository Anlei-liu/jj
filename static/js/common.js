var mySwiper = new Swiper('.swiper-container', {
    //autoplay: 5000,//可选选项，自动滑动
    loop : true,
    autoplay: 5000,
    autoplayDisableOnInteraction:false,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    onSlideChangeStart:function(sw) {
        if (sw.activeIndex === 1) {
            $('.sliderBor').removeClass('show')
        }else {
            $(".slide-title").removeClass("slideTitleShow")
            $(".silde-main").removeClass("slideMainShow")
        }
    },
    onSlideChangeEnd: function(sw) {
        console.log(sw.activeIndex)
        if (sw.activeIndex === 1) {
            $('.sliderBor').addClass('show')
        }else {
            $(".slide-title").addClass("slideTitleShow")
            $(".silde-main").addClass("slideMainShow")
        }
    }
})

$(function () {
    $(".nav-menu").click(function () {
        console.log($('.nav ul').css('height'))
        if ($('.nav>ul').css('height') === '0px') {
            $('.nav>ul').animate({'height':'100%'},'slow')
        }else {
            $('.nav>ul').animate({'height': 0},'slow')
        }
    })
})

