$(function(){
    $('#myresume').fullpage({
        controlArrows:false,
        navigation: true,
        anchors:['page1','page2','page3','page4','page5'],
        navigation:true,
        navigationPosition:'right',
        navigationTooltips:['home page','about me','skill','future plan','contact me'],
        slidesNavigation:true,
        slidesNavPosition:'bottom',
        //加载页面效果
        afterLoad:function(link, index){
            switch(index){
                case 1:s1AnimateOn();
                    break;
                case 2:s2AnimateOn();
                    break;
                case 3:s3AnimateOn()
                    break;
                case 4:s4AnimateOn()
                    break;
                case 5:s5AnimateOn();
                    break;
                default:
                    break;
            };
            $('.li_move').css('left', 20*(index-1)+'%');
        },
    });
    //nav导航栏下li_move移动函数----鼠标点击立即移动
     $.each($('li a.nav-a'),function(index){  
        $(this).click(function(){
            $('.li_move').css('left', 20*index+'%');
        });
    });
    //section1d加载动画函数
    function s1AnimateOn(){
        $('#section1-bg').addClass('bg-blur').animate({
            'opacity':'1',
        },1200,function(){
             $('.section1-title').css('opacity','1');
        });
    }
    //section2 icon hover 函数
    $.each($('.list-ul li .icon-warp'),function(index){
        $(this).hover(function(){
            $('.list-ul li:nth-child(' +( index+1 )+') span:nth-child(2)').animate({'opacity':'0'},300,function(){$('.list-ul li:nth-child(' + (index+1) +') span:nth-child(3)').css('opacity','1')});
        },function(){
            $('.list-ul li:nth-child(' +( index+1 )+') span:nth-child(3)').animate({'opacity':'0'},300,function(){$('.list-ul li:nth-child(' + (index+1) +') span:nth-child(2)').css('opacity','1')});
        });
    });
    //section2加载动画函数
    function s2AnimateOn(){
        $('.section2-list').animate({
            'opacity':'1',
            'margin-top':'120px'
        });
    };
    //section3 skill页icon hover 放大函数
    $.each($('.sicon-1'),function(){
        $(this).hover(function(){
            $(this).next().css('transform','scale(1.4)').animate({'opacity':'0'});
        },function(){
            $(this).next().css('transform','scale(1)').animate({'opacity':'1'});
        });
    });
    //section3加载动画函数  递归的回调函数
    function s3AnimateOn(){
        var changeList = $('.section3-warp li:not(#none),#last-text');
        var listlength = changeList.length;
        var i = 0;
        function animateRecursive (tobg){
            tobg.animate({'opacity':'1','top':'0'},250,function(){
                i++;
                if(i<listlength){
                    animateRecursive(changeList.eq(i));
                };
            });                   
        };
        animateRecursive(changeList.eq(0));
    };
    //section4加载动画函数
    function s4AnimateOn(){
        $('#section4-span').animate({
            'opacity':'1'
        });
    };
    //section5加载动画函数
    function s5AnimateOn(){
        $('#section5-p').animate({
            'opacity':'1',
            'top':'0'
        });
    };
    console.log("非常感谢你调试这个页面，因为做得仓促，没有做响应式（以后会继续把它完善！）页面难免会有些错误，希望你可以联系我，指出我的错误，非常感谢！另外，页面已经开源在我的github里，欢迎fork");
});
