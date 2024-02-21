$(function(){

    //menu
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(this).find(".sub").stop().slideUp();
    })

    //slide
    $(".fade li").eq(0).siblings().hide();
    var n = 0;
    setInterval(function(){
        $(".fade li").eq(n).fadeIn();
        if( n == 2){
            n=0;
        }else{
            n++;
        }
        $(".fade li").eq(n).fadeOut();
    },2500)

    //pop
    $(".p_click").click(function(){
        $(".modal, .pop").show();
    })
    $(".close").click(function(){
        $(".modal, .pop").hide();
    })


})//jquery