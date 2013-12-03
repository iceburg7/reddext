$(document).ready(function(){
	
	$(".content").append("<p>test</p>");
	
	$(".content").append("<div class='extWrapper'><div class='extLeft'></div><div class='extCenter'></div><div class='extRight'></div><div class='extBottom'></div></div>");
	
	
	
	//var imgURL = chrome.extension.getURL("images/out1l.jpg");
	//document.getElementById("images/out1l.jpg").src = imgURL;
	
	//var m = "out1";
	//var i = "url('chrome-extension://cpbbhfbacabkajlogkmcdkjifbdmpegn/images/" + m + ".jpg')";
	
	//console.log(i);
	
	
	var i = function(y){
		var z = "url('chrome-extension://cpbbhfbacabkajlogkmcdkjifbdmpegn/images/" + y + ".jpg')";
		return z;
	};
	
	console.log(i("out1"));
	//console.log(i);
	
	var m = "out1c";
	$(".extWrapper").css("backgroundImage", i(m));
	
	
	$(".extLeft").click(function(){
	
		if(m==="out1c") {
			m="out1l";
		}else if(m==="out1l") {
			m="out1b";
		}else if(m==="out1b") {
			m="out1r";
		}else if(m==="out1r") {
			m="out1c";
		}
		
		if(m==="out2c") {
			m="out2l";
		}else if(m==="out2l") {
			m="out2b";
		}else if(m==="out2b") {
			m="out2r";
		}else if(m==="out2r") {
			m="out2c";
		}
		
		
		console.log(i(m));
	
		$(".extWrapper").css("backgroundImage", i(m));
		console.log("left");
	
	});
	
	$(".extCenter").click(function(){
		
		if(m==="out1l") {
			m="out2c";
		}else if(m==="out2b") {
			m="out1b";
		}
		
		
		console.log(i(m));
		
	
		$(".extWrapper").css("backgroundImage", i(m));
		console.log("center");
	
	});
	
	$(".extRight").click(function(){
		
		if(m==="out1c") {
			m="out1r";
		}else if(m==="out1r") {
			m="out1b";
		}else if(m==="out1b") {
			m="out1l";
		}else if(m==="out1l") {
			m="out1c";
		}
		
		if(m==="out2c") {
			m="out2r";
		}else if(m==="out2r") {
			m="out2b";
		}else if(m==="out2b") {
			m="out2l";
		}else if(m==="out2l") {
			m="out2c";
		}
		
		
		console.log(i(m));
		
		
		$(".extWrapper").css("backgroundImage", i(m));
		console.log("right");
	
	});
	
});
