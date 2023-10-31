window.addEventListener('load', function () {
    //1. 获取元素
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var s4main = document.querySelector('.s4-main')

    //2. 鼠标经过，显示左右按钮
    s4main.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;//清除计时器
    });
    //3. 鼠标离开，隐藏左右按钮
    s4main.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function () {
            // 轮播图自动切换 相当于点击右箭头
            next.click();
        }, 2000);
    });
    // 4. 动态生成小圆圈 有几张图片，就生成几个小圆圈
    var protos = document.querySelector('.protos');
    var dots = document.querySelector('.dots');
    var s4main_width = s4main.offsetWidth;
    for (var i = 0; i < protos.children.length; i++) {
        //创建一个小li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号 通过创建自定义属性来做
        li.setAttribute('index', i);
        dots.appendChild(li);
    }

    // 点击右侧按钮，图片滚动一张
    var num = 0;
    //circle 控制小圆圈的播放
    var circle = 0;
    next.addEventListener('click', function () {
        // 如果走到了最后，停止next的点击功能
        if (num != 1) {
            num++;
            animate(protos, -num * s4main_width);
        }
    })
    //左侧按钮点击事件
    prev.addEventListener('click', function () {
        // 如果走到了最前，停止prev的点击功能
        if (num != 0) {
            num--;
            animate(protos, -num * s4main_width)
        } 
    })
    var timer = setInterval(function () {
        //手动调用点击事件
        next.click();
    }, 2000);

})

var simg = document.getElementsByClassName('small');
// 只有一个big，不能使用类名来获取，这样获取不来属性
// var bimg = document.getElementsByClassName('big');
var bimg = document.getElementById('pic');
// 因为小图有多个,所以要循环
for (var i = 0; i < simg.length; i++) {
    simg[i].onclick = function() {
        var ssrc = this.attributes[1].value;
        bimg.attributes[0].value = ssrc;
            // console.log(ssrc);
    }
}




