$(function () {

    $(window).on('scroll', function () {
        // console.log('스크롤 : ', $(window).scrollTop());   
        if ($(window).scrollTop() > 0) {
            $('.header_width').addClass('on');
        } else {
            $('.header_width').removeClass('on');
        }

    });

    $('.main_video').YTPlayer({
        videoURL: 'https://youtu.be/11KwsRh9XHk?list=PLi_dgkvr6Fr5wxUEq-JpMh3RSPBtH5PrK',
        containment: '.video_wrap',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    var conP = $('.main_con_left_inner').offset().top;
    // console.log(conP);
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        // console.log(sct, conP);
        if (sct > conP - 700) {
            $('.main_con_left_inner').addClass('on')
        } else {
            $('.main_con_left_inner').removeClass('on')
        }
    });




    // var conP03 = $('.main_slide').offset().top;
    // console.log(conP03);
    // $(window).on('scroll', function () {
    //     var sct03 = $(window).scrollTop();
    //     // console.log(sct, conP);
    //     if (sct03 > conP03 - 4000) {
    //         $('.main_slide').slick('slickPlay')
    //     } else {
    //         $('.main_slide').slick('slickPause')
    //     }
    // });

    $('.main_slide').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

   

    // var conP02 = $('.main_ed_center').offset().top;
    // console.log(conP02);

    // $(window).on('scroll', function () {
    //     var sct02 = $(window).scrollTop();
    //     // console.log(sct, conP);
    //     if (sct02 > conP02 - 2000) {
    //         $('.main_ed_center').addClass('on')
    //     } else {
    //         $('.main_ed_center').removeClass('on')
    //     }
    // });




    $('.main_brn_list').slick({
        slidesToShow: 12,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        pauseOnFocus: false,
    });





    $('.main_noti_list').slick({
        // slidesToShow: 2,
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4000,
        vertical: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    
    $('.main_noti_arrows i:first-child').on('click', function () {
        $('.main_noti_list').slick('slickPrev');
    });

    $('.main_noti_arrows i:last-child').on('click', function () {
        $('.main_noti_list').slick('slickNext');
    });



     // to top button
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 500) {
            //$('.toTop').fadeIn();
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });



    AOS.init();
})
