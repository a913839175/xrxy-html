$(function(){
	$(".left-nav>li").hover(function(){
		$(this).find("ul").stop(false,true).slideDown();
	},function(){
		$(this).find("ul").stop(false,true).slideUp();
	});
});
