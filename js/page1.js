var dx = 0,
	dy = 0,
	loaclY = 0;
var dx1 = 0,
	dy1 = 0,
	loaclY1 = 0;

function creatPage1() {
	//显示page1
	$(".page1").css("display", "block");
	spaceHeight = window.innerHeight - $(".page1")[0].offsetHeight;
	$(".page1 .top").css({
		"background": "url(" + imgArr[54].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".page1 .main").css({
		"background": "url(" + imgArr[51].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".page1 .tab").css({
		"background": "url(" + imgArr[53].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	});
	//制作page1 TOUCH事件
	touchPage1()
	$(".liFirst").css({
		"background": "url(" + imgArr[52].src + ") 0 0 no-repeat",
		"background-size": "100% 100%",
		"font-size": "0.9rem"
	})
	$(".nextJs").css({
		"background": "url(" + imgArr[43].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".pageCar").attr("src", imgArr[50].src).css({

	});
	$(".tabNav li:nth-of-type(1)").css({
		"background": "url(" + imgArr[48].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".tabNav li:nth-of-type(2)").css({
		"background": "url(" + imgArr[45].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".video").css({
		"background": "url(" + imgArr[55].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	});
	touch.on(".video", "touchstart", function(ev) {
		$(".video video").css({
			"display": "block"
		});
		$(".video video")[0].play();
		$(".video video")[0].onended = function() {
			$(".video video").css({
				"display": "none"
			});
		}
	})
	touch.on(".tabNav li:nth-of-type(1)", "touchstart", function() {
		$(".tabNav li:nth-of-type(1)").css({
			"background": "url(" + imgArr[48].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		});
		$(".tabNav li:nth-of-type(2)").css({
			"background": "url(" + imgArr[45].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".video").css("display", "block");
		$(".swiper").css("display", "none");
	})
	touch.on(".tabNav li:nth-of-type(2)", "touchstart", function() {
		$(".tabNav li:nth-of-type(1)").css({
			"background": "url(" + imgArr[49].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		});
		$(".tabNav li:nth-of-type(2)").css({
			"background": "url(" + imgArr[44].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".video").css("display", "none");
		$(".swiper").css("display", "block");
		$(".swiper-slide:nth-of-type(1)").css({
			"background": "url(" + imgArr[0].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".swiper-slide:nth-of-type(2)").css({
			"background": "url(" + imgArr[1].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".swiper-slide:nth-of-type(3)").css({
			"background": "url(" + imgArr[2].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".swiper-slide:nth-of-type(4)").css({
			"background": "url(" + imgArr[3].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".swiper-slide:nth-of-type(5)").css({
			"background": "url(" + imgArr[4].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 30,
			loop: true
		});
	})
	touch.on(".toMovie", "touchstart", function() {
		$(".page1").css({
			"-webkit-transform": "translateY(" + spaceHeight + "px)",
			"-webkit-transition": "all 0.2s linear"
		})
		localY = spaceHeight;
		dy = localY;
	})
	touch.on(".explain", "touchstart", function() {
		$(".upPage").css({
			"display": "block",
			"height": window.innerHeight + "px",
			"background": "rgba(0,0,0,0.5)"
		});
		$(".close").css({
			"background": "url(" + imgArr[32].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
	})
	touch.on(".close", "touchstart", function() {
		$(".upPage").css({
			"display": "none",
		});
	})
	touch.on(".nextJs", "touchstart", function() {
		$(".submit").css({
			"display": "block",
			"height": window.innerHeight + "px",
			"background": "rgba(0,0,0,0.5)"
		});
		$(".closeSubmit").css({
			"background": "url(" + imgArr[32].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
	})
	touch.on(".closeSubmit", "touchstart", function() {
		$(".submit").css({
			"display": "none",
		});
	})
}

function touchPage1() {
	touch.on(".page1", "touchstart", function(ev) {})
	touch.on(".page1", "drag", function(ev) {
		localY = dy + ev.y;

		$(".page1").css({
			"-webkit-transform": "translateY(" + localY + "px)",
			"-webkit-transition": "all 0s linear"
		})
	})
	touch.on(".page1", "dragend", function(ev) {
		//				localY>0?localY=0:null;
		//				localY<spaceHeight?localY = spaceHeight:null;
		if(localY > 0) {
			$(".page1").css({
				"-webkit-transform": "translateY(0px)",
				"-webkit-transition": "all 0.2s linear"
			})
			localY = 0;
		} else if(localY < spaceHeight) {
			$(".page1").css({
				"-webkit-transform": "translateY(" + spaceHeight + "px)",
				"-webkit-transition": "all 0.2s linear"
			})
			localY = spaceHeight;
		}
		dy = localY;

	})
	touchScoller();
}
var spaceHeight1 = -300;

function touchScoller() {
	touch.on(".scroller", "touchstart", function(ev) {
		//		ev.preventDefault();
	})
	touch.on(".scroller", "drag", function(ev) {
		localY1 = dy1 + ev.y;

		$(".scroller").css({
			"-webkit-transform": "translateY(" + localY1 + "px)",
			"-webkit-transition": "all 0s linear"
		})
	})
	touch.on(".scroller", "dragend", function(ev) {
		//				localY>0?localY=0:null;
		//				localY<spaceHeight?localY = spaceHeight:null;
		if(localY1 > 0) {
			$(".scroller").css({
				"-webkit-transform": "translateY(0px)",
				"-webkit-transition": "all 0.2s linear"
			})
			localY1 = 0;
		} else if(localY1 < spaceHeight1) {
			$(".scroller").css({
				"-webkit-transform": "translateY(" + spaceHeight1 + "px)",
				"-webkit-transition": "all 0.2s linear"
			})
			localY1 = spaceHeight1;
		}
		dy1 = localY1;

	})
}