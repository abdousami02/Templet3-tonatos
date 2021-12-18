
$(function(){

    //fix container
    $('.container').parentsUntil('body').css('min-width','1200px');

    // height of header
    
    $('.header').css("minHeight",$(window).height())
    $(window).resize(function(){
        $('.header').css("minHeight",$(window).height())
    })

    // height of Top
    $('.header .top').height(($(window).height() * 70) / 100)

    // adjust tap the bottom
    $('.top .down i').click(function(){
        $('html, body').animate({
            scrollTop: $('.serv').offset().top
        }, 800)
    })

    //trigger nice scroll
    $('html, body').niceScroll()

    // chick client 
    let leftArow = $('.testim .fa-chevron-left'),
        rightArow = $('.testim .fa-chevron-right');
    function chickClient(){

        if($('.testim .client:first').hasClass('active')){
            leftArow.fadeOut(1000)
        }else{
            leftArow.fadeIn(1000)
        }

        if($('.testim .client:last').hasClass('active')){
            
            rightArow.fadeOut();
        }else{
            rightArow.fadeIn()
        }

    }
    chickClient();

    $('.testim i').click(function(){

        if($(this).is(rightArow)){

            let fd = $('.testim .active');
            if(!$('.testim .client:last').is(fd)) {

                fd.removeClass('active').fadeOut(400,function(){    
                    $(this).next('.client').addClass('active').fadeIn()  
                    chickClient();
                })
            }
        }

        if($(this).is(leftArow)){

            let fd = $('.testim .active');
            if(!$('.testim .client:first').is(fd)) {

                fd.removeClass('active').fadeOut(400,function(){    
                    $(this).prev('.client').addClass('active').fadeIn()  
                    chickClient();
                })
            }
        }

        
    })
})