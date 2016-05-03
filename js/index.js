$(function(){
    var flag=true;
    var t=setInterval(move,2000);
    function move(){
        if(!flag){return}
        flag=false
        $('.bannerbox').animate({marginLeft:-911},function(){
            $('.bannerbox img:last-child').after($('.bannerbox img:first-child'));
            $('.bannerbox').css({marginLeft:0});
            flag=true
        });
        
    }
    $('.bannerleft').hover(function(){clearInterval(t)},function(){t=setInterval(move,2000)});
    // $('.btnr').click(function(){move()});
    // $('.btnl').click(function(){
    //     if(!flag){return}
    //     flag=false
    //     $('img:first-child').before($('img:last-child'));
    //     $('.imgs').css({marginLeft:-200});
    //     $('.imgs').animate({marginLeft:0},function(){flag=true});
        
    // })
    
})