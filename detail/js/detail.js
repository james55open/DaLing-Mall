window.onload = function(){
	
	var daling = document.getElementById('daling');
	var daling1 = document.getElementById('daling1');
	daling.onmouseover = function(){
		daling1.style.display = "block";
	}
	daling.onmouseout = function(){
		daling1.style.display = "none";
	}
	daling1.onmouseover = function(){
		daling1.style.display = "block";
	}
	daling1.onmouseout = function(){
		daling1.style.display = "none";
	}//
	//换图片
	var getli = document.getElementById('lis');
	var lis = getli.getElementsByTagName('a')
		for(var i = 0; i < lis.length ;i++){
			lis[i].index = i; 
			//console.log(i);
			lis[i].onclick = function (){  
			var picsic = "img/" +"nav_l"+(this.index + 1) + ".png";
			//console.log(picsic);
			var look = document.getElementById('look');
			look.src = picsic;
			//console.log(look.src);
			var bigimg = document.getElementById('b_bimg')
			bigimg.src = picsic;
		}
	}
	/*$("#shop").mouseenter(function(){
		$("#shopshow").css("display","block");
		$("#shop").css("display","none");
		$("#bor").css("border","1px solid black");
	});
	$("#shop").mouseout(function(){
		$("#shopshow").css("display","none");
		$("#shop").css("display","block");
		$("#bor").css("border","none");
	});*/
	
	$("#bor").mouseover(function(){
		$("#shopshow").css("display","block");
		$("#shop").css("display","none");
		$("#bor").css("border","1px solid black");
	});
	$("#bor").mouseout(function(){
		$("#shopshow").css("display","none");
		$("#shop").css("display","block");
		$("#bor").css("border","none");
	});
//放大镜
	   var box = document.getElementById('box');
	   var simg = document.getElementById('look');
	   var move = document.getElementById('move');
	   var bimgDiv = document.getElementById('bimg');
	   var bimg = document.getElementById('b_bimg');
	   box.onmousemove = function (e){
		   // 获取事件对象，用于获取鼠标位置
		   var evt = e || window.event;
		   
		   var l = evt.clientX;
		   var t = evt.clientY;
		   
			//**页面滑动《滚动放大镜效果依然存在》
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
			//页面滑动
			
		   // 计算滑块的位置
		   var toLeft =scrollLeft + l - box.offsetLeft - move.offsetWidth / 2;
		   var toTop = scrollTop + t - box.offsetTop - move.offsetHeight / 2;
		   
		   // 最大可以到达的left
		   var maxLeft = box.offsetWidth - move.offsetWidth;
		   if(toLeft < 0){
			  toLeft  = 0;
		   } else if (toLeft > maxLeft){
			  toLeft = maxLeft;
		   }
		   
		   // 最大可以到达的top
		   var maxTop = box.offsetHeight - move.offsetHeight ;
		   if(toTop < 0){
			  toTop = 0;
		   } else if (toTop > maxTop){
			  toTop = maxTop;
		   }
		   
		   // 将滑块放到适当的位置上
		   move.style.left = toLeft + 'px';
		   move.style.top = toTop + 'px';
		   
		   // 将大图放到适当的位置
		   var rate = 400 / 374; // 计数大图比上小图的比例
		   // 按比例放大移动距离
		   bimg.style.left = -toLeft * rate + 'px';
		   bimg.style.top = -toTop * rate + 'px';
		
	   }
	   box.onmouseover = function (){
		   // 鼠标移入时，显示滑块和大图
		   move.style.display = "block";
		   bimgDiv.style.display = "block";
	   }
	   box.onmouseout = function (){
			// 鼠标移出时，隐藏滑块和大图
		   move.style.display = "none";
		   bimgDiv.style.display = "none";
		   
	   }
	 //
	 //点击按钮加index时间
	 var index=0;
	 var a = document.getElementById("a");
	 var b = document.getElementById("b");
	 var int1 = document.getElementById("in");
	a.onclick = function(){
		index++;
		//console.log(index);
		int1.innerHTML = index;
	}
	b.onclick = function(){
		index--;
		if(index < 0){
			index = 0;
			return;
		}
		int1.innerHTML = index;
	}
	console.log(index);
	
//	添加到购物车
	
//	添加到购物车


	var a = document.getElementById('no1');
	
	//var img1 = document.getElementById('img1').src;
	var img1 = $("#img1").attr('src');
	//console.log(img1);
	var inf = document.getElementById('inf');
	var price = document.getElementById('price');
	//console.log(price.innerHTML);
	var int1 = document.getElementById("in");
	//console.log(img1.src);
	a.onclick = function(){
		var username = '1'; //当前登录用户
		var goodimg = img1;
		var goodinf = inf.innerHTML;
		var goodprice = price.innerHTML;
		var goodnumber = int1.innerHTML;
		
		var cartstr = getCookie('cart') ? getCookie('cart'): '{}';
		var cart = JSON.parse(cartstr);

			cart[username] = {
				img:goodimg,
				info:goodinf,
				//console.log(info);
				price:goodprice,
				num:goodnumber
				
			};
		console.log(cart);
		cartstr = JSON.stringify(cart);
		// 存回cookie当中
		setCookie('cart', cartstr, 7);
		location.href = "../shopcar/shopcar.html"
	}
	
}

