//Hide spoiler
$(".spoiler span").hide();

//Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")

$("button").click(function(){
	//Show spoiler
	$(this).prev().show();
	//Hide button
	$(this).remove();
});