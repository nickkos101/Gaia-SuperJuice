$(document).ready(function(){

	//Instanciate
	var timespan = countdown( new Date(2015, 3, 25) );

	$('.days p').empty().append(timespan.days);
	$('.hours p').empty().append(timespan.hours);
	$('.minutes p').empty().append(timespan.minutes);
	$('.seconds p').empty().append(timespan.seconds);

	setInterval(function(){
		var timespan = countdown( new Date(2015, 3, 25) );
		$('.days p').empty().append(timespan.days);
		$('.hours p').empty().append(timespan.hours);
		$('.minutes p').empty().append(timespan.minutes);
		$('.seconds p').empty().append(timespan.seconds);
		console.log('test');
	},1000);
});