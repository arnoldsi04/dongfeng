function page3(func) {
//	$("html").css({
//		"font-size": window.innerWidth / 25 + "px"
//	})
	$(".page3").css({
		"width": window.innerWidth + "px",
		"height": window.innerHeight + "px",
		"background": "url(" + imgArr[59].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".page3_btn_start").css({
		"width": window.innerWidth + "px",
		"heiht": "2.5rem",
		"position": "absolute",
		"bottom": "0"
	})

	$(".klvk4").css({
		"background": "url(" + imgArr[23].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".left1,.left2,.left3,.left4").css({
		"background": "url(" + imgArr[20].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".page3_btn_start img").css("display", "block")
	$(".page3_btn_start img").attr("src", imgArr[60].src)
	$(".left1img").attr("src", imgArr[11].src)
	$(".left2img").attr("src", imgArr[18].src)
	$(".left3img").attr("src", imgArr[19].src)
	$(".left4img").attr("src", imgArr[17].src)
	$(".left1red").css({
		"background": "url(" + imgArr[15].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".left2red").css({
		"background": "url(" + imgArr[10].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".shan").css({
		"background": "url(" + imgArr[12].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".redshan").css({
			"background": "url(" + imgArr[5].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		//left1按钮执行动画函数
	function left1animation() {
		$(".redshan").css({
			"left": "7rem",
			"top": "2.2rem"
		})
		$(".left4left,.left4rigth").css("display", "none");
		$(".left3left,.left3rigth,.left3red").css("display", "none");
		$(".left2left,.lef2rigth,.left2red").css("display", "none");

		$(".left1left").css({
			"background": "url(" + imgArr[27].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left1rigth").css({
			"background": "url(" + imgArr[9].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left1red").css("display", "block")
		$(".left2red").css("display", "none")
		var left1left = document.querySelector(".left1left");
		left1left.style.display = "block"
		left1left.className = "left1left animated fadeInLeft";
		var left1rigth = document.querySelector(".left1rigth");
		left1rigth.style.display = "block"
		left1rigth.className = "left1rigth animated fadeInRight";

	}

	function left2animation() {
		$(".redshan").css({
			"left": "10rem",
			"top": "1rem"
		})
		$(".left4left,.left4rigth").css("display", "none");
		$(".left3left,.left3rigth,.left3red").css("display", "none");
		$(".left1left,.lef1rigth,.left1red").css("display", "none");
		$(".left1red").css("display", "none")
		$(".left2left").css({
			"background": "url(" + imgArr[24].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left2rigth").css({
			"background": "url(" + imgArr[14].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})

		var left2left = document.querySelector(".left2left");
		left2left.style.display = "block"
		left2left.className = "left2left animated fadeInLeft";
		var left2rigth = document.querySelector(".left2rigth");
		left2rigth.style.display = "block"
		left2rigth.className = "left2rigth animated fadeInRight";
	}

	function left3animation() {
		$(".redshan").css({
			"left": "13rem",
			"top": "2.2rem"
		})
		$(".left1left,.left1rigth").css("display", "none");
		$(".left4left,.left4rigth").css("display", "none");
		$(".left2left,.left2rigth,.left2red").css("display", "none");
		$(".left1red").css("display", "block")
		$(".left3left").css({
			"background": "url(" + imgArr[13].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left3rigth").css({
			"background": "url(" + imgArr[28].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})

		var left3left = document.querySelector(".left3left");
		left3left.style.display = "block"
		left3left.className = "left3left animated fadeInLeft";
		var left3rigth = document.querySelector(".left3rigth");
		left3rigth.style.display = "block"
		left3rigth.className = "left3rigth animated fadeInRight";
	}

	function left4animation() {
		$(".redshan").css({
			"left": "11.2rem",
			"top": "5.8rem"
		})
		$(".left1left,.left1rigth,.left1red").css("display", "none");
		$(".left3left,.left3rigth").css("display", "none");
		$(".left2left,.left2rigth").css("display", "none");
		$(".left2red").css("display", "block")
		$(".left4left").css({
			"background": "url(" + imgArr[6].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left4rigth").css({
			"background": "url(" + imgArr[31].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})

		var left4left = document.querySelector(".left4left");
		left4left.style.display = "block"
		left4left.className = "left4left animated fadeInLeft";
		var left4rigth = document.querySelector(".left4rigth");
		left4rigth.style.display = "block"
		left4rigth.className = "left4rigth animated fadeInRight";
	}

	//		刚进入进行动画
	setTimeout(function() {
		left1animation()
		$(".left1").css({
			"background": "url(" + imgArr[61].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
	})
	touch.on(".left1", "touchstart", function() {
		$(".left1left").css({
			"display": "none"
		})
		$(".left1").css({
			"background": "url(" + imgArr[61].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left2,.left3,.left4").css({
			"background": "url(" + imgArr[20].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left2left,.left2rigth,.left2red").css("display", "none");
		left1animation()
	})

	touch.on(".left2", "touchstart", function() {
		$(".left2").css({
			"background": "url(" + imgArr[61].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left1,.left3,.left4").css({
			"background": "url(" + imgArr[20].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left1left,.left1rigth,.left1red").css("display", "none");
		$(".left2left,.left2rigth,.left2red").css("display", "block");
		left2animation()
	})
	touch.on(".left3", "touchstart", function() {
		$(".left3").css({
			"background": "url(" + imgArr[61].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left1,.left2,.left4").css({
			"background": "url(" + imgArr[20].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		left3animation()

	})
	touch.on(".left4", "touchstart", function() {
		$(".left4").css({
			"background": "url(" + imgArr[61].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		$(".left1,.left2,.left3").css({
			"background": "url(" + imgArr[20].src + ") 0 0 no-repeat",
			"background-size": "100% 100%"
		})
		left4animation()
	})
	touch.on(".page3_btn_start","touchstart",function(){
		$(".page3").css("display","none");
		func()
	})
}