// JavaScript Document
$(function(){
	$(".d1 ul li").hover(function(){
		$(this).removeClass().addClass("di2");
		},function(){
	$(this).removeClass().addClass("di1");
			})
if($(".lunbo")){
		//自动轮播
		autoRun = function(){ 
			run = setInterval(function(){			
				var _eq=$(".d1 li.di2").attr("rel");
				if(_eq > 3){_eq=0;}								
				$(".d1 li").eq(_eq).addClass("di2").siblings().removeClass().addClass("di1");
				$(".lunbo li").hide().eq(_eq).fadeIn(800);			
			},5000)
		}
		autoRun();
		//大图的鼠标hover事件(鼠标停在大图上时停止轮播)
		$(".lunbo li").hover(function(){
				clearInterval(run);
			},function(){
				autoRun();
		});

		//圆点的鼠标hover事件
		$(".d1 li").hover(function(){
				clearInterval(run);
				$(this).addClass("di2").siblings().removeClass().addClass("di1");
				_eq=$(this).index();
				$(".lunbo li").hide().eq(_eq).fadeIn(800);	//stop(true,true)
			},function(){
				autoRun();
		});
	}
//slider end 

	})