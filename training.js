$(document).ready(function(){

	$(".moins").hide();
	$(".p").hide();

    $(".plus").on("click", function(){
    	$(".p").slideDown(1000);
    	$(".plus").hide(1000);
    	$(".moins").show(1000);
    });
    
    $(".moins").on("click", function(){
    	$(".p").slideUp(1000);
    	$(".moins").hide(1000);
    	$(".plus").show(1000);
    });
});