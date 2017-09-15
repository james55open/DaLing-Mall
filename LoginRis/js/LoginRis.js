window.onload = function(){
//	列表交换
	$('.banner .main ul li').click(function(){
		var index = $(this).index();
		//console.log(index);
		
		$(this).siblings().children().css('background','#f9fbfd');
		
		$(this).children().css({background:'url(img/banner_bac.png) no-repeat center bottom'});
		
		//console.log(res);
		
		if(index==0){
			$(this).parent().parent().children().eq(3).css('display','none');
			$(this).parent().parent().children().eq(2).css('display','block');
		}else if(index==1){
			$(this).parent().parent().children().eq(2).css('display','none');
			$(this).parent().parent().children().eq(3).css('display','block');
		}
	});
//	列表交换	
//	颜色变化
		
//	颜色变化	
//	验证码
		function create(){
				// 48---122
				
				var res = "";
				while(res.length < 4){
					var code = parseInt((122-48)*Math.random() + 48);
					
					if((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >=97 && code <= 122)){
						res += String.fromCharCode(code);
					}
					
					/*
					if(res.length == 4){
						break;
					}*/
				}
				
				return res;
			}   
			var p = document.getElementById('p2');
			function change(){
					p.innerHTML = create();
				}
			change();
			p.onclick = change;
//	验证码
		var rbtn = document.getElementById('res');
		rbtn.onclick = function(){
			var user = document.getElementById('number').value;
			var pwd = document.getElementById('pwd').value;
			if(!user){
				alert("用户名不能为空");
			}else{
				var pattern =  /^1\d{10}$/;
				var a = false;
				if(pattern.test(user)){
					alert("用户输入格式正确");
					a = true;
				} else {
					alert("请输入11位的（数字1开头）手机号");
					a = false;
				}
			}
			//验证码
			var yzm = document.getElementById('yzm').value;
			var b = false;
			if(yzm != p.innerHTML){
				alert("验证码不正确");
				 b = false;
			}else{
				alert('right');}
				 b = true;
			//短信
			var mes = document.getElementById('mes').value;
			var c = false;
			if(!mes){
				alert("请获取短信验证码");
				c = false;
				//console.log(c);
			}else if(mes){
				c = true;
				console.log(c);
			}
			var users = getCookie("res");
			//密码
			var pattern1 = /^[a-zA-Z0-9]\w{5,14}/;
			if(!pwd){
				alert("密码不能为空");
			}else{
				var d = false;
				if(pattern1.test(pwd)){
					alert("密码格式正确");
					d = true;
					console.log(d);
				}else{
					alert("密码首字母只能是数字字母且长度为6-15位");
					d = false;
				}
			}
			//注册
			users = convertStrToObj(users);
			if(user in users){
				alert("该用户名应经注册");
				return;
			}else 
			if((users[user] = pwd) && a==true && b==true && c==true && d==true){
				var usersStr = convertObjToStr(users);
				setCookie("res", usersStr, 7);
				alert("注册成功");
			}
		}
//	验证码	
		
		
	
		var btn = document.getElementById('log');
		btn.onclick = function(){
			var user = document.getElementById('phone').value;
			var psw = document.getElementById('card').value;
			
			var users = getCookie("res");
			users = convertStrToObj(users);
			var isOk = false;
			for(var key in users){
				if(key == user && psw == users[key]){
					isOk = true;
					setCookie("loginedUser", user, 7);
					location.href = "../index.html";
				}
			}
			if(!isOk){
				alert("您输入的用户名或密码有误");
				return;
			}
			
		}
		function convertObjToStr(obj){
			/* {
			 * 	 test1 : "123456",
			 *   test2 : "abcdef",
			 *   test3 : "qwert",
			 *   test4 : "lkjhu"
			 * }
			 * 转化为"test1,123456:test2,abcdef:test3,qwert"
			 */
			// 将对象转化为字符串
			var result = "";
			for(var key in obj){
				if(result){
					result += ":";
				}
				result += key + "," + obj[key];
			}
			return result;
		}
		function convertStrToObj(str){
			if(str === ""){
				return {};
			}
			
			var arr = str.split(':');
			var result = {};
			// arr = [""];
			for(var i = 0; i < arr.length; i++){
				// arr[0] === ""
				// data = [""]
				var data = arr[i].split(',');
				result[data[0]] = data[1];
			}
			
			return result;
		}
	

//	验证码	
}