
setTimeout (function () {
    var wx = $('.wx_str').eq(0).text().replace(/\s*/g, "");
    $('body').append('<div class="redCopy">微信号：<span class="weixin-number">' + wx + '</span> 点击复制</div><img src="http://huazhen-poster.oss-cn-hangzhou.aliyuncs.com/m.gzhuazhen.com/wechatJ.png" alt="" class="wat-fixed"><div class="num-fixed"><span class="weixin-number">' + wx + '</span><a  id="openWx">点击复制</a><div class="close">X</div></div><div class="FImg"><img src="http://huazhen-poster.oss-cn-hangzhou.aliyuncs.com/m.gzhuazhen.com/ma/' + wx + '.png" alt=""></div><div class="onlineMsgBG"> <div class="onlineMsg"> <div class="copy_txt">复制成功！您打开微信->选择微信右上角的+号->选择添加朋友->长按粘贴即可添加</div> <a href="weixin://" class="copy_btn">确定</a> </div> </div>');
    $('.redCopy,.expert,#openWx').attr('data-clipboard-text', wx);

    var isC = false;
    $(".redCopy,.expert").on("click", function () {
        $('.redCopy,.expert,#openWx').attr('data-clipboard-text', wx);

        var clipboard2 = new ClipboardJS('.redCopy,.expert', {});
        clipboard2.on('success', function (e) {
            if (!isC) {
                $('.onlineMsgBG').show();
                isC = true;
            }
        });
        clipboard2.on('error', function (e) {
            if (!isC) {
                $('.onlineMsgBG').show();
                isC = true;
            }
        });
        isC = false;
    })
	

 var isC = false;
    $("#openWx").on("click", function () {
        $('.redCopy,.expert,#openWx').attr('data-clipboard-text', wx);

     
        var clipboard3 = new ClipboardJS('#openWx', {});
        clipboard3.on('success', function (e) {
            if (!isC) {
                $('.onlineMsgBG').show();
                isC = true;
            }
        });
        clipboard3.on('error', function (e) {
            if (!isC) {
                $('.onlineMsgBG').show();
                isC = true;
            }
        });
        isC = false;
    })

    $('.close').click(function () {
        if ($(document).width() > 640) {
            $('.dia_wx').hide();
        } else {
            $('.num-fixed').hide();
            $('.wat-fixed').show();
        }
    });
    $('.wat-fixed').click(function (event) {
        $('.num-fixed').show();
    });

    $('.copy_btn').click(function(){
        $('.onlineMsgBG').hide();
    })

},800)