function canvasPage(func){
	//配置canvas
	var canvas = $("#canvas")[0];
	canvas.style.display = "block";
	var ctx = canvas.getContext("2d");
	ctx.timer = null;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var imgMovieNum = 64;
	ctx.drawImage(imgArr[65],0,0,window.innerWidth,window.innerHeight);
	touch.on("#canvas","touchstart",function(e){
		e.preventDefault();
		ctx.timer = setInterval(function(){
			ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
			imgMovieNum++;
			ctx.drawImage(imgArr[imgMovieNum],0,0,window.innerWidth,window.innerHeight);
			if(imgMovieNum == 299){
				clearInterval(ctx.timer);
				canvas.style.display = "none";
				func();
			}
		},1000/24)
	})
	touch.on("#canvas","touchend",function(){
		clearInterval(ctx.timer);
	})
	$(".img62").css({
		"height":window.innerHeight,
		"display":"flex",
		"justify-content":"center",
		"align-items":"center"
	}).animate({
		"opacity":0
	},1000,function(){
		$(".img62").css("display","none");
	})
	$(".img62_in").css({
		"background": "url(" + imgArr[62].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	});
	
}
