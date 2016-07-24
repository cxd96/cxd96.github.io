// JavaScript Document
$(function(){
	
		$(".sl").click(function(){
	$("#cus").animate({"left":"-=220px"},function(){
		$("#cus img:first").remove().appendTo("#cus");
		$("#cus").css("left","0px") 
		})
	})
	$(".sr").click(function(){
	$("#cus img:last").remove().prependTo("#cus");
    $("#cus").css("left","-220px")
	$("#cus").animate({"left":"0px"})
	})
	$(".customer a").hover(function(){
		var com=$(this).attr("com")
		var com=$(this).attr("com")
		$(this).children("img").attr("src","images/Customer case/"+com+".png")
		},function(){
		var con=$(this).attr("con")
		var con=$(this).attr("con")
		$(this).children("img").attr("src","images/Customer case/"+con+".png")	
			})
	/*$(".cus ul li").click(function(){
		var con=$(this).attr("con");
		$("#"+con).show();
		$("#"+con).siblings().hide();
		})
	$("#cus img").hover(function(){
		var com=$(this).attr("com");
		$(this).attr("src","images/Customer case/"+com+".png");
		},function(){
		var co=$(this).attr("co");
		$(this).attr("src","images/Customer case/"+co+".png");	
	})*/
	
})

window.onload=function(){
 
    var div2=document.getElementById("cus");
 
    var imgs=div2.getElementsByTagName("img");
 
    var imgBig=document.getElementById("big");
 
    for(var i=0;i<imgs.length;i++){
 
     imgs[i].onclick=function(){
 
      imgBig.src=this.src;
 
     }
 
    }
 
   }