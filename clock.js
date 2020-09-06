function second(){
	var date = new Date();
    var deg=6;
    let hh= date.getHours()*30;
    let mm=date.getMinutes()*deg;
    let sec= date.getSeconds()*deg;
	$("#second").css("transform", 'rotate('+sec+ 'deg)');
	$("#minute").css("transform", 'rotate('+mm+ 'deg)');
	$("#hour").css("transform", 'rotate('+hh+ 'deg)');

}
setInterval(second,1000);

