$(document).ready(function(){

	$('#allClear').click(function(){
		document.form.screen.value = "";
	});

	$('#percentage').click(function(){
		document.form.screen.value += '%';
	});

	$("#division").click(function(){
		document.form.screen.value += '/';
	});

	$("#seven").click(function(){
		document.form.screen.value += 7;
	});

	$("#eight").click(function(){
		document.form.screen.value += 8;
	});

	$("#nine").click(function(){
		document.form.screen.value += 9;
	});

	$("#multip").click(function(){
		document.form.screen.value += '*';
	});

	$("#four").click(function(){
		document.form.screen.value += 4;
	});

	$("#five").click(function(){
		document.form.screen.value += 5;
	});

	$("#six").click(function(){
		document.form.screen.value += 6;
	});

	$("#sub").click(function(){
		document.form.screen.value += '-';
	});

	$("#one").click(function(){
		document.form.screen.value += 1;
	});

	$("#two").click(function(){
		document.form.screen.value += 2;
	});

	$("#three").click(function(){
		document.form.screen.value += 3;	
	});

	$("#add").click(function(){
		document.form.screen.value += '+';
	});

	$("#zero").click(function(){
		document.form.screen.value += 0;
	});

	$("#point").click(function(){
		document.form.screen.value += '.';
	});

	$("#equal").click(function(){
		if (screen.value == "") {
		   document.form.screen.value += "";
		}else{
		  document.form.screen.value = eval(document.form.screen.value);
	    }
	});
});
