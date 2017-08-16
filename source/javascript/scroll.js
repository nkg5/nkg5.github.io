var scroll = $(window).scrollTop();
$(window).scroll(function(){
	scroll = $(window).scrollTop();
	var height = $(window).height();
  	var offset = height/2;
  	if (scroll > 3*offset) {
    	$(".project").css("animation-play-state", "running");
  	}else if(scroll > offset){
    	$("#about-container").css("animation-play-state", "running");
  	}
});
