$(function () {
    $('#all-content').fullpage({
        sectionsColor: ['rgb(33,35,37)', 'rgb(255,250,240)', 'rgb(33,35,37)', 'rgb(255,250,240)','rgb(33,35,37)'],
        anchors: ['page0', 'page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        verticalCentered: false,
        scrollingSpeed: 1000,

        // 滚动到某一屏后的回调函数
        afterLoad: function (anchorLink, index) {
            // 获取到页面的索引号
            var data = $('.active').data('menuanchor');
            data = data.substr(4)
            //  导航栏的li 添加类
            $('#menu li').eq(data).addClass('listyle').siblings().removeClass('listyle')
        },
    });


    // 点击 导航栏的a 就给li 添加类 其他的去掉类
    $('#menu li a').click(function () {
        $(this).parent().addClass('listyle').siblings().removeClass('listyle')
    })
    // 禁止图片拖拽
    function imgdragstart() { return false; }
    for (i in document.images) document.images[i].ondragstart = imgdragstart;
    // 禁止鼠标右键
    document.oncontextmenu = new Function("event.returnValue=false;");
    $('.s3-main li').mouseover(function () {
        $(this).children().stop().animate({
            bottom: 0
        })
    })
    $('.s3-main li').mouseout(function () {
        $(this).children().stop().animate({
            bottom: -50
        })
    })
});