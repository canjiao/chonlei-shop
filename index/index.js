$(function() {
    //头部商品分类一直展示
    $(".header .bottom .categery .list").show();
    // banner轮播图
    new Swiper('.banner-swiper', {
        autoplay: true,//可选选项，自动滑动
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.banner-pagination',
          clickable :true,
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    // 热销商品轮播
    new Swiper('.hot-swiper', {

        autoplay: false,//可选选项，自动滑动
        effect: 'slide',
        pagination: {
          el: '.hot-pagination',
          clickable :true,
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    new Swiper('.swiper-container-scrollbar', {
        direction: 'vertical',
        roundLengths : true, 
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

    // 新会员专区
    new Swiper('.members-swiper', {
        slidesPerView: 6,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });




    /**
     * 楼层相关  
     */ 
    // 排行榜
    $(".floors .floor-item").each(function (index,el) { 
        var elSwiper = '.floor'+(index+1)+' .rank-swiper';
        var elPagination = '.floor'+(index+1)+' .rank-pagination';
        new Swiper(elSwiper, {
            autoplay: false,//可选选项，自动滑动
            effect: 'slide',
            pagination: {
              el: elPagination,
              clickable :true,
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
        });
    })

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