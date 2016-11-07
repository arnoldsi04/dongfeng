var imgSrcArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "371_1453779101.png", "912_1453779104.png", "1093_1453854255.png", "1536_1453779105.png", "2062_1453779100.png", "2115_1453779103.png", "2214_1453779105.png", "2407_1453779106.png", "2488_1453779103.png", "2740_1453779102.png", "3046_1453779101.png", "3375_1453854403.png", "4169_1453779106.png", "4505_1453779105.png", "4536_1453779106.png", "4575_1453779105.png", "4814_1453854252.png", "5844_1453779104.png", "5865_1453779098.png", "6240_1453779101.png", "6253_1453779102.png", "7030_1453856838.png", "7705_1453779100.png", "8268_1453779103.png", "8279_1453779085.png", "8696_1453854253.png", "9228_1453779104.png", "commen_close.png", "layer_info_checked.png", "layer_info_select.jpg", "layer_info_submit.png", "layer_prize_none.png", "layer_prize.png", "layer_select_bg.png", "layer_share_tip.png", "loading_bg.jpg", "loading_clock.png", "loading_pointer.png", "page1_btn_next.png", "page1_btn_pic_active.png", "page1_btn_pic.png", "page1_btn_prev.png", "page1_btn_share.png", "page1_btn_video_active.png", "page1_btn_video.png", "page1_k4.png", "page1_main_bg.jpg", "page1_nav_active.png", "page1_tab_bg.jpg", "page1_top_bg.jpg", "page1_video_poster.png", "page2_bg.jpg", "page2_btn_intro.png", "page2_btn_start.png", "page3_bg.jpg", "page3_btn_start.png", "page3_choosed_bg.png", "page4_tip.png", "page5_bg.jpg", "share.jpg"];
var imgLoadingArr = ["images/loading_bg.jpg", "images/loading_pointer.png", "images/loading_clock.png"];
var loadImg = [];
var loadImgNum = 0;
var imgArr = [];
var imgFinal = 0;
var loadingDiv = document.querySelector(".loading");
//var rem = window.innerWidth / 25;
$("html").css({
	"font-size": Math.min(window.innerWidth / 25,250) + "px"
})

window.onresize = function(){
	$("html").css({
	"font-size": Math.min(window.innerWidth / 25,250) + "px"
});
}
function loadingImg(func) {
	for(var i = 0; i < imgLoadingArr.length; i++) {
		var img = new Image();
		img.src = imgLoadingArr[i];
		loadImg.push(img);
		img.onload = function() {
			loadImgNum++;
			if(loadImgNum == imgLoadingArr.length) {
				//loading界面预加载完成 开始创造预加载页面
				creatLoding();
				preLoading(func);
			}
		}
	}
}

function preLoading(func) {
	for(var i = 0; i < imgSrcArr.length + 235; i++) {
		var img = new Image();
		if(i < imgSrcArr.length) {
			img.src = "images/" + imgSrcArr[i];
		} else {
			img.src = "images/video/" + "che_" + (i - imgSrcArr.length + 1) + ".jpg";
		}
		imgArr.push(img);
		img.onload = function() {
			imgFinal++;
			$(".pointer").css({
				"transform": "rotateZ(" + (imgFinal * 280 / (imgSrcArr.length + 235) - 140) + "deg)"
			});
			$(".percent").html(parseInt(imgFinal * 100 / (imgSrcArr.length + 235)) + "%");

			if(imgFinal == imgSrcArr.length + 235) {
				//预加载成功 隐藏loading加载页面
				$(".loading").attr("style", "display: none;");
				//构造page1
				func();
			}
		}
	}
}
//构造预加载页面设置
function creatLoding() {
	$(".loading").css({
		"background": "url(" + loadImg[0].src + ") 0 0 no-repeat",
		"width": window.innerWidth + "px",
		"background-size": "100% 100%",
		"height": window.innerHeight + "px"
	})
	$(".clock").css({
		"background": "url(" + loadImg[2].src + ") 0 0 no-repeat",
		"width": "8rem",
		"height": "7.1rem",
		"background-size": "100% 100%",
		"position": "absolute",
		"left": "8.5rem",
		"top": "10rem"
	})
	$(".pointer").css({
		"background": "url(" + loadImg[1].src + ") 0 0 no-repeat",
		"width": "0.5rem",
		"height": "4rem",
		"background-size": "100% 100%",
		"position": "absolute",
		"left": "12.25rem",
		"top": "10rem",
		"transform-origin": "bottom center"
	})
}
var spaceHeight = window.innerHeight - $(".page1")[0].offsetHeight;