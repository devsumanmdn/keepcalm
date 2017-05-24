function toggle(f) {
	var a=0;
	while(a<5) {

		$("#m" + parseFloat(a+1)).css('transition','left '+parseFloat(a+1)*0.16+'s ease ');
		if(f==1){
			$("#m" + parseFloat(a+1)).css('left','0px');
			$("#pills").attr("onclick","toggle(0)");
            $(".main").attr("onclick", "toggle(0)");
		}
		else{
			$("#m" + parseFloat(a+1)).css('left','-244px');
			$("#pills").attr("onclick","toggle(1)");
            $(".main").attr("onclick", "");
		}
		a = a + 1;
	}
}
//
// $(document).ready(() => {
//     var a = 1, b = 2, max=3, c = max;
//     setInterval(function(){
//         $("#slider>#img" + a).attr("active",'changing');
// 				setTimeout(function(){
// 					$("#slider>#img" + c).attr("active",'false');
// 				},1000);
//         $("#slider>#img" + b).attr('active','true');
//         if (a === (max - 1)) {
//             a = 3;
//             b = 1;
//             c = 2;
//         }else {
// 					c = a;
//           a = b;
//           b++;
//         }
//     }, 3000);
// });
