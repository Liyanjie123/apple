$(function(){
	var nowpage=0;/*这个变量用来表示页数*/
	var width=window.innerWidth;//获取屏幕的宽度
	var height=window.innerHeight;
	$(".content").width(width);/*设置content的宽高*/
	$(".content").height(4*height);
	$(".page").width(width);/*设置每个page的宽高*/
	$(".page").height(height);
	
	$(".content").swipe({/*一个对象*/
		swipe:function(event,direction,distance,duration,fingercount){
//			console.log(direction);
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage>3){
				nowpage=3
			}
			else if(nowpage<0){
				nowpage=0
			}
		$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
			if(nowpage==1){
				$(".page2-farm").fadeIn(1000,function(){
//		$(".page2-it").animate({width:"60%"},{duration:2000});
		$(".page2-it").fadeIn(2000);
	})
			}
			if(nowpage==2){
				$(".page3-early").fadeIn(2000);
				$(".page3-title").fadeIn(3000);
				$(".page3-bus").animate({left:"-100%"},{duration:2000})
				$(".page3-avatar").animate({right:"50%"},{duration:4000,complete:function(){
					$(".page3-bus").fadeOut("slow");
					$(".page3-avatar").fadeOut("slow");
					$(".page3-early").fadeOut("slow");
					$(".page3-station").fadeOut("slow");
					$(".page3-title").fadeOut("slow",function(){
						$(".page3-wall2").fadeIn("slow");
						$(".page3-avatar2").fadeIn("slow",function(){
							$(".page3-space2").animate({width:"30%"},{duration:400,complete:function(){
								$(".page3-where2").animate({width:"55%"},{duration:400})
							}})
						})
					});
			
				}})
			}
		}})
		}
	});
//	animate({要做的动画效果},{duration:动画时长,comlete:动画执行完了要做的事情})
//	$(".content").animate({
//		top:nowpage*100+"%"
//	},{duration:400})
	$(".page1-Buildings").fadeIn(1000,function(){
		$(".page1-flight").animate({width:"70%"},{duration:2000})
	});
	$(".page4-lightoff").click(function(){
		$(this).attr("src","img/lightOn.png");
		$(".page4-BG").fadeOut("slow");
		$(".page4-lightoff").fadeOut("slow");
		$(".page4-corner").fadeOut("slow",function(){
			$(".page4-bg2").fadeIn("slow");
			$(".page4-knowyou").fadeIn("slow");
		})
	})
//	$(".page2-farm").fadeIn(1000,function(){
//		$(".page2-it").animate({width:"60%"},{duration:2000})
//	})
	
})
//$(document).ready(function(){
//	
//})
//等文档完成之后再执行JS代码