function creatPage4() {
	$(".page4").css({
		"height": window.innerHeight,
		"background": "url(" + imgArr[63].src + ") 0 0 no-repeat",
		"background-size": "100% 100%",
		"display": "block"
	})
	$(".page4_inner").css({
		"background": "url(" + imgArr[26].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".zhuanpan").css({
		"background": "url(" + imgArr[30].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".play").css({
		"background": "url(" + imgArr[7].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".page4_sele").css({
		"background": "url(" + imgArr[21].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	if($(".play")[0].offsetTop + $(".play")[0].offsetHeight > window.innerHeight) {
		$(".page4_inner").css({
			"top": "1rem",
		})
		$(".page4_sele").css({
			"top": "8.8rem"
		})
		$(".zhuanpan").css({
			"top": "13rem"
		})
		$(".play").css({
			"top": "30rem"
		})
	}
	$(".ball").css({
		"background": "url(" + imgArr[16].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	$(".page4suc").css({

		"background": "url(" + imgArr[37].src + ")0 0 no-repeat",
		"background-size": "100% 100%",
		"width": window.innerWidth,
		"height": window.innerHeight
	})
	touch.on(".off", "touchstart", function() {
		location.reload();
	})
	$(".page4loser").css({

		"background": "url(" + imgArr[36].src + ")0 0 no-repeat",
		"background-size": "100% 100%",
		"width": window.innerWidth,
		"height": window.innerHeight
	})
	var giftArr = [14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20];
	touch.on(".play", "touchstart", function() {
		var xiazhu = $(".page4_sele")[0].options[$(".page4_sele")[0].selectedIndex].value;
		var lastNum = fnRand(0, 5);
		if(xiazhu.length > 0) {
			var num = lastNum * (360 * 37) + 2.5;
			var nowDeg = 0;
			var speed = fnRand(5, 50);
			var playTimer = null;
			//			console.log(giftArr.length);
			playTimer = setInterval(function() {
				speed <= 0.1 ? speed = 0.1 : speed -= 0.1;
				nowDeg += speed;
				$(".giftTo").css({
					"transform": "rotateZ(" + nowDeg + "deg)"
				})
				if(speed <= 0.1 && (nowDeg - 2.5) % 360 % (360 / 37) <= 0.1) {

					clearInterval(playTimer);
					var degLast = parseInt((nowDeg - 2.5) % 360 / (360 / 37));
					//				console.log(degLast);
					//				console.log(nowDeg%360%(360/37));
					//				console.log(giftArr[degLast]);
					var Innum = giftArr[degLast];
					if(Innum > xiazhu && Innum < parseInt(xiazhu) + 6) {
						$(".page4suc").css({
							"display": "block",

						})

					} else {
						$(".page4loser").css({
							"display": "block",

						})

					}
				}
			}, 30)
		}
	})
}

function fnRand(max, min) {
	return parseInt(Math.random() * (max - min) + min);
}