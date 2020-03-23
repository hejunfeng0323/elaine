// var question = [
//   "您的性别是？",
//   "您的年龄是？",
//   "您遇到以下哪一个情感问题？"
// ];

// var choose = [
//   ["男", "女"],
//   ["23岁-30岁", "30岁以上"],
//   ["分手挽回","挽回婚姻", "分离第三者"]
// ];


var section0 = ["您的性别是？", " 您的年龄是？", "您的情感问题是？", "在对方提出分开的时候，你选择的修复方式是无休止地纠缠，还是冷静地处理？", "Ta在你心中的重要性占多少？", "失去TA，你是否会寝食难安？你确定是真的爱TA？", "修复爱情需要方法，盲目修复只会让情况越来越糟，你是否愿意为修复这段感情做出改变？", "您是否能如实描述感情状况？这关乎情感分析和修复方案的准确性！", " 你是否做过寻短威胁，修复机构，死缠烂打等修复行为？", "你是否有完全控制不住自己，做出极端行为，寻短威胁等倾向？", "如果修复TA需要1个月，你需要经历复联破冰，重建印象，关系升温等步骤，但过程充满坎坷和煎熬，你是否会因为这些困难，而放弃一生的幸福？", "恭喜你，你的情况符合情感修复标准。你的意志坚决，且没有原则性错误，只要有正确的引导和修复方法，复合机会很大！你想尽快开始行动吗？", "添加我的微信，即可获得1对1情感分析服务【每天仅限10个名额】想修复心爱的TA就马上添加我的微信号吧，给自己和心爱的Ta一次感情升华的机会吧！【复制微信后，记得去微信进行添加，下面有添加方法】"];

var arr2 = ["男", " 23岁-30岁", "分手修复", "无休止纠缠", "40%以下", "是", "愿意", "能", "是", "有", "愿意", "是"];

var arr3 = ["女", "30岁以上", "修复婚姻", "冷静处理", "60%以上", "否", "不愿意", "不能", "否", "没有", "不愿意", "否"];



var answer0 = [
  ["男", "女"],
  ["23岁-30岁", "30岁以上"],
  ["分手修复", "修复婚姻"],
  ["无休止纠缠", "冷静处理"],
  ["40%以下", "60%以上"],
  ["是", "否"],
  ["愿意", "不愿意"],
  ["能", "不能"],
  ["是", "否"],
  ["有", "没有"],
  ["愿意", "不愿意"],
  ["是", "否"],
];

//婚姻修复
var section1 = [
  "你们结婚多久？",
  "你们有孩子吗？",
  "你们会在生活中互相迁就对方吗？",
  "对方每天回家吗？",
  "对方会主动承担起家庭的责任吗？",
  "你知道对方穿多大码的内裤吗？",
  "性生活和谐吗？",
  "会经常心与心的沟通，站在对方的角度去思考吗？",
  "如果对方能变成你们刚刚在一起的时候的样子，你还愿意跟对方在一起吗？",
  "谁痛苦谁改变，谁改变谁受益，如果你的婚姻能和好如初，你愿意改变吗？",
  "添加我的微信，即可获得1对1情感分析服务！每日仅限10个名额 , 想挽回心爱的TA就尽快联系我吧，给自己和心爱的ta一次感情升华的机会吧 !【复制微信后，记得要去微信进行添加，下面有添加方法】"
];

var answer1 = [
  ["3年之内", "3年以上"],
  ["有", "没有"],
  ["会", "不会"],
  ["回", "不回"],
  ["会", "不会"],
  ["知道", "不知道"],
  ["和谐", "不和谐"],
  ["会", "不会"],
  ["愿意", "不愿意"],
  ["愿意", "不愿意"]
];

//分离第三者
var section2 = [
  "你们结婚多久？",
  "你们有孩子吗？",
  "你会经常鼓励和赞扬对方吗？",
  "性生活和谐吗？",
  "现在两个人在一起还有刚在一起的时候那种如胶似漆的感觉吗？",
  "你是怎么称呼你另一半的呢？",
  "你知道第三者的具体信息吗？",
  "你有思考过你的对方为什么出轨吗？",
  "如果对方愿意回归家庭，你愿意原谅他吗？",
  "谁痛苦谁改变，谁改变谁受益，如果你的婚姻能和好如初，你愿意改变吗？",
  "添加我的微信，即可获得1对1情感分析服务！每日仅限10个名额 , 想挽回心爱的TA就尽快联系我吧，给自己和心爱的ta一次感情升华的机会吧 !【复制微信后，记得要去微信进行添加，下面有添加方法】"
];

var answer2 = [
  ["3年之内", "3年以上"],
  ["有", "没有"],
  ["会", "不会"],
  ["和谐", "不和谐"],
  ["有", "没有"],
  ["叫爱称", "直呼其名"],
  ["知道", "不知道"],
  ["有", "没有"],
  ["愿意", "不愿意"],
  ["愿意", "不愿意"]
];

var section = section0,
  answer = answer0,
  flag = 0,
  final = 13;
var clicking = false;

$(".start").click(function () {
  if (!clicking) {
    clicking = true;
    $(".content").append(" <div class=\"guke animated fadeInRight\">\n" +
      "<div class=\"bg2\">开始</div>\n" +
      " <div class=\"imgSize2-box0\"><img src=\"./index_files/qw.png\" class=\"imgSize2\" alt=\"\"></div></div>");
    $(".first").show();
    $(".secend").hide();
    $(".first .start").html("请稍后...");

    setTimeout(function () {
      $(".content").append("<div class=\"yisheng  animated fadeInLeft\">\n" +
        " <div class=\"imgSize2-box\"><img src=\"./index_files/2wq.png\" class=\"imgSize2\" alt=\"\"></div>" +
        " <div class=\"bg1\">" + section0[flag] + "</div>\n" +
        " </div>");
      $(".first").hide();
      $(".secend").show();
      $(".left").html(answer[flag][0]);
      $(".right").html(answer[flag][1]);
      var offset = window.pageYOffset;
      if (offset < 200) {
        offset = 1000;
      }
      window.scrollTo(0, offset + 160)
    }, 800);
  }

});

function answerShow(content) {

  var index0 = $(".yisheng").length;
  $(".content").append(" <div class=\"guke animated fadeInRight\">\n" +

    "<div class=\"bg2\">" + content + "</div>\n" +

    "<div class=\"imgSize2-box0\"><img src=\"./index_files/qw.png\" class=\"imgSize2\" alt=\"\"></div></div>");

  $(".first").show();
  $(".secend").hide();
  $(".first .start").html("请稍后...");

  setTimeout(function () {
    $(".content").append("<div class=\"yisheng  animated fadeInLeft\">\n" +
      " <div class=\"imgSize2-box\"><img src=\"./index_files/2wq.png\" class=\"imgSize2\" alt=\"\"></div>" +
      " <div class=\"bg1\">" + section[flag] + "</div>\n" + " </div>");

    if (flag + 1 === final) {
      setTimeout(function () {
        $(".bottom-box").show();
      }, 1000);
      $(".secend").hide();
      $(".three").show();
      $("#here").removeClass("here");
      $(".first").hide();
    } else {
      $(".first").hide();
      $(".secend").show();
      if (answer[flag].length > 2) {
        $(".left").html(answer[flag][0]).css("width", "32%");
        $(".center").html(answer[flag][1]).css({
          width: "32%",
          display: "inline-block"
        });
        $(".right").html(answer[flag][2]).css("width", "32%");
      } else {
        $(".left").html(answer[flag][0]).css("width", "44%");;
        $(".center").html(answer[flag][1]).css({
          width: "44%",
          display: "none"
        });
        $(".right").html(answer[flag][1]).css("width", "44%");;
      }    
    }
    var offset = window.pageYOffset;
    if (offset < 200) {
      offset = 1000;
    }
    window.scrollTo(0, offset + 160)

  }, 800);

}

$(".left").click(function () {
  var content = $(this).html();
  // if (content === "分手挽回") {
  //   flag = 0;
  //   section = section0;
  //   answer = answer0;
  //   final = section.length;
  //   $('.img101').attr('src', 'img/101.png');
  //   $('.img100').show();
  // } else {
  flag++;
  // }
  answerShow(content)
});
$(".center").click(function () {
  var content = $(this).html();
  // if (content === "挽回婚姻") {
  //   flag = 0;
  //   section = section1;
  //   answer = answer1;
  //   final = section.length;
  //   // $("#copy_btn").attr("data-clipboard-text", "awjqg001");
  //   // $("#wechat_code").html("awjqg001");
  // } else {
  flag++;
  // }
  answerShow(content);
});
$(".right").click(function () {
  var content = $(this).html();
  // if (content === "分离第三者") {
  //   flag = 0;
  //   section = section2;
  //   answer = answer2;
  //   final = section.length;
  //   // $("#copy_btn").attr("data-clipboard-text", "awjqg001");
  //   // $("#wechat_code").html("awjqg001");
  // } else {
  flag++;
  // }
  answerShow(content)
});
// $(".copy1").on("click", function () {
//   var clipboard2 = new ClipboardJS('.copy1', { text: function () { return mess2; } });
//   clipboard2.on('success', function (e) {
//     alert("复制成功");
//     lsck();
//   });
//   clipboard2.on('error', function (e) {
//     alert('请选择“拷贝”进行复制!')
//   });
// });
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
  $('.wat-fixed').hide();
});
var isC2 = false;
$(".copy1").on('click', function (e) {
  $('.copy1').attr('data-clipboard-text', $('.wx_str').eq(0).text());
  var clipboard3 = new ClipboardJS('.copy1', {});
  clipboard3.on('success', function (e) {
    if (!isC2) {
      $('.onlineMsgBG').show();
      isC2 = true;
    }
  });
  clipboard3.on('error', function (e) {
    if (!isC2) {
      $('.onlineMsgBG').show();
      isC2 = true;
    }
  });
  isC2 = false;

})
var isC = false;
$(".copyBtn").on("click", function () {
  $('.copyBtn').attr('data-clipboard-text', $('.wx_str').eq(0).text());
  var clipboard3 = new ClipboardJS('.copyBtn', {});
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

// var clipboard = new ClipboardJS('#copy_btn');

// clipboard.on('success', function (e) {

//   window._agl && window._agl.push(['track', ['success', {t: 3}]])

//   console.info('Action:', e.action);

//   console.info('Text:', e.text);

//   console.info('Trigger:', e.trigger);

//   e.clearSelection();

//   alert('复制成功');

//   window.location.href = "weixin://";

// });

// clipboard.on('error', function (e) {

//   alert('此浏览器不支持,请手动复制')

// });