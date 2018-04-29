
$(".nojs").removeClass("nojs");
$("#nojs").addClass("js");

$("#home_button").click(function(e){
  $('html, body').animate({
    scrollTop: $('#title').offset().top
  }, 'slow');
  e.stopPropagation();
});
$("#about_button").click(function(e){
  $('html, body').animate({
    scrollTop: $('#about').offset().top
  }, 'slow');
  e.stopPropagation();
});
$("#projects_button").click(function(e){
  $('html, body').animate({
    scrollTop: $('#projects').offset().top
  }, 'slow');
  e.stopPropagation();
});
$("#contact_button").click(function(e){
  $('html, body').animate({
    scrollTop: $('#contact').offset().top
  }, 'slow');
  e.stopPropagation();
});
$("#button-hamburger").click(function(e){
  if($("#buttons").hasClass("on")){
    $("#buttons").removeClass("on");
    $("#buttons").addClass("off");
  }else{
    $("#buttons").removeClass("off");
    $("#buttons").addClass("on");
  }
});
