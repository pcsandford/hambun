$(document).ready(function(){

	 $(window).scroll(function () {

	                var $currentScroll = $(window).scrollTop();
	                if((($currentScroll >= 300) && ($currentScroll <= 800)))
	                {
	                    $('.hamText').addClass("specialOne");
	                }
	                else if((($currentScroll >= 700) && ($currentScroll <= 1100)))
	                {
	                	$('.bunText').addClass("specialTwo");
	                }  
	                else if((($currentScroll >= 1100) && ($currentScroll <= 1400)))
	                {
	                	$('.right-three .bunTextThree').addClass("specialThree");
	                }    
	                else if((($currentScroll >= 1500)))
	                {
	                	$('.final-stage .enjoy').addClass("finalColor");
	                };    
	    });           
      
});