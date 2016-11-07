function page2(func) {
//	$("html").css({
//		"font-size": window.innerWidth / 25 + "px"
//	})
	$(".page2").css({
		"width": window.innerWidth + "px",
		"height": window.innerHeight + "px",
		"background":"url("+imgArr[56].src+")0 0 no-repeat",
		"background-size": "100% 100%"
	});
	$(".page2_left").css({
		"width": "12.3rem",
		"height": "3rem",
		"background": "url(" + imgArr[57].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})

	$(".page2_right").css({
		"width": "12.3rem",
		"height": "3rem",
		"background": "url(" + imgArr[58].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	
	touch.on(".page2_left","touchstart",function(){
		$(".page3").css("display","block");
		$(".page2").css("display","none");
	})
	touch.on(".page2_right","touchstart",function(){
		//启动K4接口
		$(".page2").css("display","none");
		func();
	})
}