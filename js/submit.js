function creatSubmit(func) {
	$(".sele1").css({
		"background": "url(" + imgArr[34].src + ") 0 0 no-repeat",
		"background-size": "100% 100%"
	})
	console.log(data);
	$(".sheng")[0].onchange = function() {
		var grade = $(".sheng")[0].options[$(".sheng")[0].selectedIndex].value;
		var objs = data["0," + grade];
		var optionsAll = document.querySelectorAll(".inShi");
		for(var i = 0; i < optionsAll.length; i++) {
			optionsAll[i].remove();
		}
		for(var x in objs) {
			var options = document.createElement("option");
			options.value = "0," + grade + "," + x;
			options.innerHTML = objs[x];
			options.className = "inShi";
			$(".shi")[0].appendChild(options);

		}
	}
	$(".shi")[0].onchange = function() {
		var grades = $(".shi")[0].options[$(".shi")[0].selectedIndex].value;
		var objss = data[grades];
		for(var x in objss) {
			var options = document.createElement("option");
			options.value = grades + "," + x;
			options.innerHTML = objss[x];
			$(".sele2")[0].appendChild(options);
		}
	}
	$(".subMessage").css({
		"background": "url(" + imgArr[35].src + ") 0 0 no-repeat",
		"background-size": "100% 100%",
		"width": "11rem",
		"height": "2.8rem",
		"position": "absolute",
		"bottom": "0.5rem",
		"left": "6rem"
	});
	touch.on(".subMessage", "touchstart", function(e) {
			e.preventDefault();
			//		$(".submit")[0].style.display = "none";
			//		$(".page1")[0].style.display = "none";
			if(sub == 0) {
				var user = $("#user")[0].value;
				var phoneNumber = $("#phone")[0].value;
				var sellerPlace = $(".sele2")[0].options[$(".sele2")[0].selectedIndex].value;
				var carType = $("#carType")[0].options[$("#carType")[0].selectedIndex].value;
				var buyTime = $("#buyTime")[0].options[$("#buyTime")[0].selectedIndex].value;
				var canNum = 0;
				var reg = new RegExp();
				var dri = document.querySelectorAll(".inp2");
				var tryDri = 0;
				for(var i = 0; i < dri.length; i++) {
					if(dri[i].checked == true) {
						canNum++;
						tryDri = dri[i].value;
					}
				}
				if(user.length > 1) {
					canNum++;
				}
				if(carType.length > 1) {
					canNum++;
				}
				if(buyTime.length > 1) {
					canNum++;
				}
				reg = /^\d{11}$/;
				if(reg.test(phoneNumber)) {
					canNum++;
				}
				var dataSub = {
					"user": user,
					"phone": phoneNumber,
					"试驾": tryDri,
					"省份": $(".sheng")[0].options[$(".sheng")[0].selectedIndex].value,
					"市": $(".shi")[0].options[$(".shi")[0].selectedIndex].value,
					"经销商": sellerPlace,
					"车型": carType,
					"购车时间": buyTime
				}
				if(canNum == 5) {
					//			alert("提交数据成功")
					console.log(dataSub);
					sub = 1;
					$(".jugeRight").css("display", "block").animate({
						"opacity": 0
					}, 1000, function() {
						//				alert(1);
						$(".jugeRight").css({
							"opacity": 1,
							"display": "none"
						});
						//跳转到page2
						$(".page1").css("display","none");
						$(".submit").css("display","none");
						func();
					});
				} else {
					var jugems = document.createElement("div");
					jugems.className = "jugeRight";
					jugems.innerHTML = "请输入完整信息";
					$(".ground")[0].appendChild(jugems);
					$(jugems).css("display", "block").animate({
						"opacity": 0
					}, 1000, function() {
						//				alert(1);
						$(".jugeRight").css({
							"opacity": 1,
							"display": "none"
						})
					});
				}
			}
	})

}
var sub = 0;