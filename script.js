$(document).ready(function(){
	
	$(".content").append("<p>test</p>");
	
	$(".content").append("<div class='extWrapper'></div>");
	
	$(".extWrapper").click(function(){
	
		$(".extWrapper").css("backgroundColor", "blue");
		console.log("click");
	
	});
	
});
