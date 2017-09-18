
window.onload=function(){
	//1.head部分二维码效果
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
	}
	//head部分二维码效果
	//11. 倒计时效果
	function show(){
		var time = document.getElementById('ti');
		var time1 = document.getElementById('ti1');
		var time2 = document.getElementById('ti2');
		var time3 = document.getElementById('ti3');
		var end = new Date(2016,08,19);
		//月份从0开始；
		var now = new Date();
		var total = end.getTime() - now.getTime();
		
		var d = 24*60*60*1000;
		var h = 60*60*1000;
		var m = 60*1000;
		var mis = 1000;
		
		var day = parseInt(total / d);
		   //console.log(day);
		var hou = parseInt((total % d)/h);
		var min = parseInt((total % d % h ) / m);
		var mins = parseInt((total % d % h % m ) / mis);
		
		var str="倒计时";
		
		str += adjust(day) + "天" + adjust(hou) + "时" + adjust(min)+ "分" + adjust(mins) + "秒";
//		console.log(str);
		time.innerHTML = str;
		time1.innerHTML = str;
		time2.innerHTML = str;
		time3.innerHTML = str;
	}		
		show();
		setInterval(show,1000);
		
		function adjust(num){
			if(num < 10){
				return "0"+num;
			}	
			return ""+num;
		}
	
	//11. 倒计时效果
	
	//4.navindex部分效果
	//轮播图效果
	$(function(){
		var $navli = $('.navt li');
		var index = 0;
		console.log($navli);
		function letshow(){
			$('.navb li').removeClass('select').eq(index).addClass('select');
			$navli.eq(index).fadeIn(300).siblings().fadeOut(300);
		}
		letshow();
		function current(){
			index++;
			if(index==$navli.size()){
				index = 0;
			}
			letshow();
		}
		var timer = setInterval(current,2500);
		$(".navb li").click(function(){
			clearInterval(timer);
			index = $(this).index();
			letshow();
			timer = setInterval(current,2500);
		});
	});
	//轮播图
	//侧拉框
	$(function(){
	//5图片变动效果
		$('.but a').mouseover(function(){
				$(this).children().css('position','relative').stop().animate({left:'-15px',top:'-15px',height:'300px'},300);	
		});
		$('.but a').mouseout(function(){
				$(this).children().stop().animate({left:'0',top:'0',height:'283px'},300);
		});
	//5图片变动效果
		$('.indeximg dl').mouseover(function(){
			var _self=$(this);
			$(this).addClass('hover').siblings().removeClass('hover');
			$('.indeximg_n').css({'display':'block','border':'1px solid black'});
				$('.indeximg_n').mouseover(function(){
				$(this).css({'display':'block','border':'1px solid black'});
				_self.addClass('hover').siblings().removeClass('hover');
			});
		});
		$('.indeximg dl').mouseout(function(){
			var _self = $(this);
			
			$(this).removeClass('hover');
			
			$('.indeximg_n').css({'display':'none','border':'1px solid black'});
			
				$('.indeximg_n').mouseout(function(){
				$(this).css({'display':'none','border':'1px solid black'});
				
				_self.removeClass('hover');
			});
		});
	//侧拉框
	//7 效果改变
		$('.world ul li').mouseover(function(){
				$(this).children().children().css('position','relative').stop().animate({left:'-3px',top:'-1px',right:'3px',buttom:'1',width:'210',height:'143px'},300);	
		});
		$('.world ul li').mouseout(function(){
				$(this).children().children().stop().animate({left:'0',top:'0',right:'0px',buttom:'0',width:'207px',height:'141px'},300);
		});
	//7 效果改变
	//6 new 换组图
			var aindex = 0;
		$('.new_lr a').click(function(){
			aindex++;
		console.log(aindex);
			if(aindex == 2){
				aindex=-1;
				//return aindex;
			}
				$('.new_ .new_s').eq(aindex).siblings().css('display','none');
				$('.new_ .new_s').eq(aindex).css('display','block');
				
			
		});
	
	//6 new 换组图
	
	//8 best换组图

		$('.best_t li ').click(function(){
			    //console.log($('.best_t li '));
			$(this).children().css('background','#e14958');	
			$(this).siblings().children().css('background','#fff');	
			var index = $(this).index();
			    //console.log(index);
			$('.best_ div').eq(index).siblings().css('display','none');
			
			$('.best_ div').eq(index).css('display','block').siblings().css('display','none');
			

		});
		
		
		
	//8 best换组图	
	//9 buy小变大的框
		$('.buy .buy_body_l div').mouseenter(function(){
			//console.log($('.buy .buy_body_l dl'));
			var _self = this;
			var $dv = $('.buy .buy_body_l div');
			if($dv.children().css('display','block')){
				$(_self).children().css('display','none').siblings().css('display','block');
				return;
			}
			
		});
		$('.buy .buy_body_l div').mouseleave(function(){
			var _self = this;
			var $dv = $('.buy .buy_body_l div');
			if($dv.children().css('display','none')){
				$(_self).children().css('display','block').siblings().css('display','none');
				return;
			}
		});
	//9 buy小变大的框
	});
	
	//navindex部分效果
	
	//忘记写了一个效果;
	$("#l2").mouseenter(function(){
		$(this).css({boxShadow:"#666 0px 0px 10px"});
	});
	$("#l2").mouseout(function(){
		$(this).css({boxShadow:"none"});
	});
	$("#l3").mouseenter(function(){
		$(this).css({boxShadow:"#666 0px 0px 10px"});
	});
	$("#l3").mouseout(function(){
		$(this).css({boxShadow:"none"});
	});
	$("#l4").mouseenter(function(){
		$(this).css({boxShadow:"#666 0px 0px 10px"});
	});
	$("#l4").mouseout(function(){
		$(this).css({boxShadow:"none"});
	});
	$("#l5").mouseenter(function(){
		$(this).css({boxShadow:"#666 0px 0px 10px"});
	});
	$("#l5").mouseout(function(){
		$(this).css({boxShadow:"none"});
	});
	//忘记写了一个效果;
}

