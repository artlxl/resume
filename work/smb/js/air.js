window.onload = function(){
//	var showCity=document.getElementById("showCity");
//	navigator.geolocation.getCurrentPosition(function (position) {
//      var lat = position.coords.latitude;
//		var lon = position.coords.longitude;
//		var point = new BMap.Point(lon, lat);  // 创建坐标点
//    // 根据坐标得到地址描述
//      var myGeo = new BMap.Geocoder();
//       myGeo.getLocation(point, function (result) {
//       	var city = result.addressComponents.city;
//       	alert(city);
//          showCity.innerHTML=city;
//      });
//  });

	
	
	getInfo();
	
	var xmlhttp;
    // 创建XMLHTTPRequest对象  
    function createXMLHTTPRequest()  
    {  
         if(window.ActiveXObject)//②如果当前浏览器为IE  
         {  
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  
         }  
         else if(window.XMLHttpRequest)//③如果是其他浏览器  
         {  
            xmlhttp = new XMLHttpRequest();  
         }else  
         {  
             alert("Your browser does not support XMLHTTP.");  
        }  
    }  
      
    function getInfo()  
    {  
      createXMLHTTPRequest();  
      var cityName=document.getElementById("showCity").innerHTML;
      xmlhttp.open("get", "http://apis.baidu.com/heweather/weather/free?city="+cityName, true);
//    xmlhttp.setRequestHeader("ak","q9wdozm6sasj5ZoHRYXBWucaenipyGfG")
      xmlhttp.setRequestHeader("apikey","ea6b889b29fb2c99c82fc5215e8e6283");
      xmlhttp.onreadystatechange = returnInfo;
      xmlhttp.send();  
    }  
      
    function returnInfo()  
    {  
      if(xmlhttp.readyState == 4 && xmlhttp.status==200)  
      {  
       var info = xmlhttp.responseText; 
       info = info.replace("HeWeather data service 3.0","weather");
//     alert(info);
       var obj = JSON.parse(info); 
 
//     document.getElementById("showCity").innerHTML = obj.weather[0].basic.city;  
       document.getElementById("showPm").innerHTML = obj.weather[0].aqi.city.pm25;
      }  
    }
};