$(function(){
	var myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var mySwiper = new Swiper('.banner', {
	    pagination: '.swiper-pagination',
	    paginationClickable :true,
	})	
	$("footer>a").click(function(){
		var index =$("footer>div").index(this);
		$("footer>a").removeClass("active").eq(index).addClass("active");
	})
})