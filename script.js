$(document).ready(function(){
	
	$(".content").append("<p>test</p>");
	
	$(".content").append("<div class='extWrapper'>");
	$(".content").append("<div class='extLeft'></div>");
	$(".content").append("<div class='extCenter'></div>");
	$(".content").append("<div class='extRight'></div>");
	$(".content").append("</div>");
	
	$(".extWrapper").click(function(){
	
		$(".extWrapper").css("backgroundColor", "blue");
		console.log("click");
	
	});
	
});
