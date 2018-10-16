
var imgBtn = $("#image")
var imgHide = $("#hide")
var imgShow = $("#show")
var imgFade = $("#fade")

imgHide.click(function(){
	$("img").hide()
})

imgShow.click(function(){
	$("img").show()
})


imgBtn.click(function() {
	$("img").toggle();
	
})

imgFade.click(function() {
	$("img").toggleClass("fade")
	if($("img").css("opacity") == 0) {
		$("h1").text("Fade Off")
	} else {
		$("h1").text("Fade on")
	}
})

$("img").hover(function() {
	$("img").attr("src","https://vignette.wikia.nocookie.net/spongebobgalaxy/images/3/35/029a_-_Survival_of_the_Idiots_348.jpg/revision/latest?cb=20140805180731")
})
// ,	function() {
// 		$("img").attr("src","https://www.spaceanswers.com/wp-content/uploads/2014/11/xs3jxmg8-1413499539.jpg")
// 	})

$("#newItem").click(function(){
	$("ul").append("<li>Hi</li");

})
	$("li").hover(function() {
		$(this).css({"color": "tomato", "font-size": "20px", "font-family": "sans-serif"})
	}, function() {
		$(this).css({"color": "initial", "font-size": "initial", "font-family": 
			"intial"})
	});

$("#red").click(function(){
	$("body").append("<div class='redCover'></div>")
})


$("img").mouseout(function(){
	$("img").attr("src","https://www.spaceanswers.com/wp-content/uploads/2014/11/xs3jxmg8-1413499539.jpg")
})

