// 文档结构载入完成后，显示Loading效果
//$(function(){
//	loading_container  = '<div id="loading_container" style="position:absolute;z-index:1300;max-width:600px;height:100%;padding:0;margin:-50px 0 0;text-align:center;background-color:#ffffff;">';
//	loading_container += '<div id="loading_circle">';
//	loading_container += '<img src="img/banner/loading.jpg" class="img-responsive""  />';
////	loading_container += '<span id="outer"><span id="inner"></span></span>';
////	loading_container += 'Loading';
//	loading_container += '<div id="loading_slow">网速有点慢，请继续等待或 <a href="#" id="loading_refresh">重载</a> 网页。</div>';
//	loading_container += '</div>';
//	loading_container += '</div>';
//	$("body").prepend(loading_container);
//	setTimeout(function(){
//		$("#loading_slow").fadeIn(500)
//	},
//	10000);
//	$("#loading_refresh").click(function() {
//		location.reload();
//		return ! 1;
//	});
//});

// 文档元素载入完成后，删除Loading效果
//$(window).load(function(){
//	$("#loading_container").fadeOut(5000,function(){
//		$(this).remove();
//		//myAC_main1.play(); // 开启myAC_main1主动画控制器中动画的播放
//	});
//});
	
window.onload=function(){
	var loading = document.createElement("div");
		loading.innerHTML ="<div id='loading_container' style='position:absolute;z-index:1300;max-width:600px;height:100%;padding:0;margin:-50px 0 0;text-align:center;background-color:#ffffff;'><div id='loading_circle'><img src='img/banner/loading.jpg' class='img-responsive' /></div></div>";
	var body = document.getElementById("body");
//		body.insertBefore(loading,body.childNodes[0]);  
		setTimeout(function(){
			body.removeChild(loading);
		},2500); 
	
	function get_cookie(Name) 
	{ 
	   var search = Name + "=" 
	   var returnvalue = ""; 
	   if (document.cookie.length > 0) { 
	     offset = document.cookie.indexOf(search) 
	     if (offset != -1) {                            
	// 如果指定的cookie已经存在
	        offset += search.length                     
	// 长度指定到cookie值的位置               
	        end = document.cookie.indexOf(";", offset); 
	// 判断是否还包括其他cookie值
	        if (end == -1)                              
	//如果不包括
	           end = document.cookie.length;            
	//获取cookie的长度
	        returnvalue=unescape(document.cookie.substring(offset, end)) 
	//获取cookie的值
	      } 
	   }   
	   return returnvalue; 
	};
	
	if (get_cookie("loading")==""){                   
	//判断是否已经弹出过窗口
	    		body.insertBefore(loading,body.childNodes[0]);                                
	//如果没有则弹出窗口
	     document.cookie="loading=yes"                  
	//设置cookie值
	    } 
	
};
//
//
//$(window).load(function(){
//		
//});