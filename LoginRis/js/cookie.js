function getCookie(name){
	// 格式：  
	// "user=zhangsan; user2=lisi; user3=wangwu"
	// 需要一个返回值，就是查询到的value
	
	var myCookie = document.cookie;
	// 用分号和空格将整个cookie字符串做分隔
	var cookieArr = myCookie.split('; ');
	
	for(var i = 0; i < cookieArr.length; i++){
		// 用等号将某个cookie中的键和值分开
		var data = cookieArr[i].split('=');
		// 如果查询到存在（键名和传入的参数值相等），那么返回其值
		if(data[0] == name){
			return decodeURIComponent(data[1]);
		}
	}
	
	// 不存在，则返回一个空字符串
	return "";					
}

function removeCookie(name){
	setCookie(name, "", -1);
}

function setCookie(name, value, expiredays){
	// name, value是一个字符串
	// 过期时间给一个天数（数字类型），比如7，表示7天后过期
	
	var exp = new Date(); // 获取当前时间对象
	// 将时间调整为expiredays天后的时间
	exp.setDate(exp.getDate() + expiredays);
	// 获取时间对象的GMT格式字符串
	var gmtStr = exp.toGMTString(); 					
	// 生成字符串，并设置到document.cookie上面
	// 对value值进行编码，以支持中文，空格等cookie允许的字符
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + gmtStr+";path=/";
}