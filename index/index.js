$(function() {
    //头部商品分类一直展示
    $(".header .bottom .categery .list").show();
    // banner轮播图
    new Swiper('.banner-swiper',{
        pagination: '.banner-swiper .pagination',
        paginationClickable: true,
        autoplay : 3000,//可选选项，自动滑动
        loop : true,//可选选项，开启循环
        autoplayDisableOnInteraction : false, //用户操作swiper之后，是否禁止autoplay
    })

    //限时抢购
    var flashSwiper = new Swiper('.flash-swiper', {
        slidesPerView: 5,
        loop: true,
    });
    $('.flash-sale-right .swiper-button-prev').on('click', function(e){
        e.preventDefault()
        flashSwiper.swipePrev()
    })
    $('.flash-sale-right .swiper-button-next').on('click', function(e){
        e.preventDefault()
        flashSwiper.swipeNext()
    })

    //每日推荐
    $('.recommend .every-day .classfily-title li').click(function (e) { 
        e.preventDefault();
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.recommend .every-day .bottom').hide().eq(index).show();
    });

    //排行榜dot点击切换
    $('.list-dot span').hover(function (e) { 
        e.preventDefault();
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('.rank-list').hide().eq(index).show();
    });
    
    // 热销商品轮播
    // new Swiper('.hot-swiper', {
    //     pagination: '.hot-swiper .pagination',
    //     paginationClickable: true,
    // });

    // // 新会员专区
    // var memversSwiper = new Swiper('.members-swiper', {
    //     slidesPerView: 6,
    //     loop: false
    // });
    // var memversProduct = $('.members-swiper .swiper-slide').size();
    // function memversSwiperArrowDisabled(){
    //     var firstSwiperFlag = $('.members-swiper .swiper-slide').eq(0).hasClass('swiper-slide-visible');
    //     var lastSwiperFlag = $('.members-swiper .swiper-slide').eq(memversProduct-1).hasClass('swiper-slide-visible');
    //     if(firstSwiperFlag){
    //         $('.main .members .bottom .swiper-button-prev').addClass('disabled')
    //     }else{
    //         $('.main .members .bottom .swiper-button-prev').removeClass('disabled')
    //     }
    //     if(lastSwiperFlag){
    //         $('.main .members .bottom .swiper-button-next').addClass('disabled')
    //     }else{
    //         $('.main .members .bottom .swiper-button-next').removeClass('disabled')
    //     }
    // }
    // memversSwiperArrowDisabled();
    // $('.members .swiper-button-prev').on('click', function(e){
    //     e.preventDefault()
    //     memversSwiper.swipePrev()
    //     memversSwiperArrowDisabled()
    // })
    // $('.members .swiper-button-next').on('click', function(e){
    //     e.preventDefault()
    //     memversSwiper.swipeNext()
    //     memversSwiperArrowDisabled()
    // })




    /**
     * 楼层相关  
    */ 
    // 排行榜
    // $(".floors .floor-item").each(function (index,el) { 
    //     var elSwiper = '.floor'+(index+1)+' .rank-swiper';
    //     var elPagination = '.floor'+(index+1)+' .pagination';
    //     new Swiper(elSwiper, {
    //         pagination: elPagination,
    //         paginationClickable: true,
    //     });
    // })

    // 楼层选项卡product-categery点击
    $(".floors .product-categery ul.three-categery li").click(function () {
        var index = $(this).attr('data-index');
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parent().siblings(".product-list").hide().eq(index).show();
    })

    

    // fixed侧边小楼层
    var floorTopArr = [];
    $(".floors .floor-item").each(function () { 
        var top = parseInt($(this).offset().top)-200; 
        floorTopArr.push(top);
    })
    var floorsTop = parseInt($(".floors").offset().top); 
    $(document).scroll(function() {
        var scrollTop = parseInt($(document).scrollTop()); 
        if(scrollTop>=floorsTop-200){
            $(".slide-floors").show();
            //控制当前楼层高亮
            var index = 0;
            for (var i = 0; i < floorTopArr.length; i++) {
                if(i===floorTopArr.length-1){
                    index = i;
                    break;
                }else{
                    if(scrollTop>=floorTopArr[i]&&scrollTop<floorTopArr[i+1]){
                        index = i;
                        break;
                    }
                }
                
            }
            $(".slide-floors .slide-floor-li").eq(index).addClass("li-active").siblings().removeClass("li-active");
        }else{
            $(".slide-floors").hide()
        }
    });
    $(".slide-floors .slide-floor-li").click(function () {
        var slideIndex = $(this).index();
        $("html,body").animate({scrollTop:floorTopArr[slideIndex]+2+'px'},300)

     })
})