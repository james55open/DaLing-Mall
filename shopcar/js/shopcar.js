window.onload = function(){
	var cartstr = getCookie('cart');
	//console.log(cartstr);
	if(cartstr){
		var cart = JSON.parse(cartstr);
		for(var user in cart){
			var li = document.createElement('li');
			
			var ul = document.createElement('ul');
			var banner_t = document.getElementsByClassName('banner_t')[0];
			

			var good = cart[user];
//			var str = "<img src="+good.img+"/>"+good.info + ", 价格：" + good.price + 
//						    ", 数量：" + good.num + ", 总价：" + good.num * good.price;
			var str = "<img src="+good.img+"/>"+ good.info+"&nbsp;&nbsp;&nbsp;价格：" + good.price + 
						    "&nbsp;&nbsp;&nbsp;数量：" + good.num + "&nbsp; &nbsp;&nbsp;总价：" + good.num+"*"+good.price;
			//console.log(str);
			li.innerHTML = str;
			li.innerHTML +="&nbsp;&nbsp;<a id='o1' href='javascript:;'>从购车删除</a>"; 
			ul.appendChild(li);
			console.log(ul);
			banner_t.appendChild(ul);
			//console.log(user);
			li.id = user;
			//console.log(li.id);
			$('#o1').click(function (){
							// 访问父节点的ID属性，获取商品的ID
							var goodId = this.parentNode.id;
							console.log(goodId);
							// 将cookie中存的购物车商品信息取出
							var cartStr = getCookie('cart');
							// 转化成对象
							var cart = JSON.parse(cartstr);
							
							// 方法二
							// 可以用delete操作符，后面直接跟上一个对象的属性
							// 可以删除该对象的这个属性
							delete cart[user];
							var res = cart; // 这行就是为了下面的代码可以兼容上面注释掉的循环
							
							// 将删除了相应商品之后的购物车对象，转化成字符串
							var resStr = JSON.stringify(res)
							
							// 存回cookie
							setCookie('cart', resStr, 7);
							
							// 界面上将对应的div删除
							ul.removeChild(this.parentNode);
			});
						
						
						// 将div追加到body中
					
						banner_t.appendChild(ul);
		}
	} else{
			banner_t.innerHTML = "<img src="+img/banner_t_bac.png+"/>";
	}
};		
	
