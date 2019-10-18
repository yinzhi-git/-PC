//项目共用js

$(function(){
	//搜索框点击显示
	$(".head-search").click(function(){
		$(".search-main").slideToggle();
	})
	
	//测导航动画
	$(".fixed-right-list").hover(function(){
		$(this).stop().animate({margin:'0 0 1px -160px'});
		$(this).children('span').stop().show(400);
	},function(){
		$(this).stop().animate({margin:'0 -160px 1px 0'});
		$(this).children('span').stop().hide(200);
	});
	//兼容性移除最后右margin
	$('.foot-commercial li:nth-child(4n)').css('margin-right','0');
	$('.pro-list li:nth-child(4n)').css('margin-right','0');
	$('.recommend li:nth-child(3n)').css('margin-right','0');
	$('.fenye li:last-child a').css('width','64px');
	$('.fenye li:first-child a').css('width','64px');
	//人才招聘点击下拉动画
	$(".recruit-main li>div.recruit-top>span:last-child").click(function(){
		if( $(this).children("s").text()=="查看详情" ){
			$(this).children("s").text("收起");
			$(this).children("i").children().attr("src","img/icon-recruit1.png");
			$(this).removeClass("active");
			$(this).parent().siblings().stop().slideDown(600);
		}else{
			$(this).children("s").text("查看详情");
			$(this).addClass("active");
			$(this).children("i").children().attr("src","img/icon-recruit.png");
			$(this).parent().siblings().stop().slideUp(600);
		}
		
	})
	//专家星级
	$(".xingxing li.active").nextAll().children().hide();
	//评价专家
	$(".assessPop-xing li").click(function(){
		$(this).addClass("active");
		$(this).prevAll().children().show();
		$(this).children().show();
		$(this).nextAll().children().hide();
	})
	
})
//弹窗显示与关闭
$(function(){
	//登录弹窗
	$(".header-top-right>div:nth-child(1)").click(function(){
		$(".pop-bg").show();
		$(".loginPop").show();
	})
	//关闭弹窗
	$(".loginPop-head .close").click(function(){
		$(".pop-bg").hide();
		$(".loginPop").hide();
	})
	//评论专家
	$(".zhuanjia-topIn-but span.ping").click(function(){
		$(".pop-bg").show();
		$(".assess").show();
	})
	//联系专家
	$(".zhuanjia-topIn-but span.zhao").click(function(){
		$(".pop-bg").show();
		$(".lianxiPop").show();
	})
	//发布需求
	$(".index-pro-right .demand").click(function(){
		$(".pop-bg").show();
		$(".xuqiuPop").show();
	})
	$(".demand>span.demand-in").click(function(){
		$(".pop-bg").show();
		$(".xuqiuPop").show();
	})
	//关闭弹窗
	$(".assessPop-head .close").click(function(){
		$(".assessPop").hide();
		$(".pop-bg").hide();
		//关闭弹窗后重置评价星级数
		$(".assessPop-xing li").removeClass("active");
		$(".assessPop-xing li").children().hide();
	})
	
	//点击背景关闭弹窗
	$(".pop-bg").click(function(){
		$(".pop-bg").hide();
		$(".loginPop").hide();
		$(".assessPop").hide();
		//关闭弹窗后重置评价星级数
		$(".assessPop-xing li").removeClass("active");
		$(".assessPop-xing li").children().hide();
	})
})

$(function(){
	//首页新闻切换
	$(".index-news-left-top li").click(function(){
		$(".index-news-leftIn>div").hide();
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})
	$(".index-news-left-top li:nth-child(1)").click(function(){
		$(".index-news-leftIn>div:nth-child(1)").show();
	})
	$(".index-news-left-top li:nth-child(2)").click(function(){
		$(".index-news-leftIn>div:nth-child(2)").show();
	})
	$(".index-news-left-top li:nth-child(3)").click(function(){
		$(".index-news-leftIn>div:nth-child(3)").show();
	})
	$(".index-news-left-top li:nth-child(4)").click(function(){
		$(".index-news-leftIn>div:nth-child(4)").show();
	})
	//首页会员模块切换
	$(".index-vip-topList li").click(function(){
		$(".index-vip-main>div").hide();
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})
	$(".index-vip-topList li:nth-child(1)").click(function(){
		$(".index-vip-main>div:nth-child(1)").show();
	})
	$(".index-vip-topList li:nth-child(2)").click(function(){
		$(".index-vip-main>div:nth-child(2)").show();
	})
	$(".index-vip-topList li:nth-child(3)").click(function(){
		$(".index-vip-main>div:nth-child(3)").show();
	})
	$(".index-vip-topList li:nth-child(4)").click(function(){
		$(".index-vip-main>div:nth-child(4)").show();
	})
	$(".index-vip-topList li:nth-child(5)").click(function(){
		$(".index-vip-main>div:nth-child(5)").show();
	})
	$(".index-vip-topList li:nth-child(6)").click(function(){
		$(".index-vip-main>div:nth-child(6)").show();
	})
	
	
})


