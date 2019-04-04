setTimeout(function(){ 

var sum = 0;
var prodDay = $(".inout-table tr:not('.disable-listing') span.text-purpule").length;
prodDay *= 9;
$.each( $(".inout-table tr:not('.disable-listing') span.text-purpule"),function(k, v){
     var prod_time = $(v).html().split(" ");
     var prod_hour = prod_time[0].replace('h','');
	 var prod_minute = prod_time[1].replace('m','');
	 sum += parseInt(prod_minute) + parseInt(prod_hour*60);
});
var actualHr = (sum / 60);
var diffHr = actualHr - prodDay;
var Hrs = Math.trunc(diffHr);
var mins = parseInt((Math.abs(diffHr - Hrs) * 60).toFixed(0));
swal(Hrs+' '+mins);


}, 3000);

