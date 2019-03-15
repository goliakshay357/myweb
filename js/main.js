
// this is for making height of window in window size!!!
$(document).ready(function(){
    $('.header').height($(window).height());
   })

$(document).ready(function(){
    $('.overlayabout').height($('.about').height());
   })

      
$(".navbar a").click(function(){
 $("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
 },1000)
 
})   