$(function(){
    var user={
        name:'123'
    }
    var result=template("tpl-user",{user:user});
    $("#html-user").html(result);

    setTimeout(function(){
      $("#swiper-html").html(template("swiper-tpl",{data:[1,2,3,4]}));

      var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        paginationClickable: true,
        // autoplay : 5000,//可选选项，自动滑动
        // loop : true,//可选选项，开启循环
      })
      $('.arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
      })
      $('.arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
      })

    }, 2000);
    
    
})