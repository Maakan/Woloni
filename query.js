$(document).ready(function(){
	$("#disparais").click(function(){
		$(this).hide();
	});

	$("#apparais").click(function(){
		$("#disparais").show();
	});
var disparais = document.getElementById('disparais').textContent;
console.log(disparais);
});