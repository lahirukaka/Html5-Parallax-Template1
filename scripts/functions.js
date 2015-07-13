$(window).resize(function(){
	location.reload();
});

function scrollToPage(position)
{
	$("html, body").animate({ scrollTop: position },1000,'swing');
}

function resetMenuActive()
{
	$('#mainnav > ul > li:nth-child(1)').removeClass('activemenu');
	$('#mainnav > ul > li:nth-child(2)').removeClass('activemenu');
	$('#mainnav > ul > li:nth-child(3)').removeClass('activemenu');
}
/*................................................................*/
var startabout,startstaff,startcontact;

$(window).load(function(){
	var height = $(window).height();
	
	var navheight = $('#mainnav').height();
	startabout = $('#aboutpage').offset().top - navheight;
	startstaff = $('#staffpage').offset().top - (navheight * 2);
	startcontact = $('#contactpage').offset().top - (navheight * 2);
	
	/*landing page*/
	$("html, body").scrollTop(0);
	$('#heroimg-lvl1').delay(600).animate({'left':'0px'},1000)
	$('#landingpage span').delay(600).slideDown(1000);
	$('#enterbtn').click(function(){
		scrollToPage(height - navheight);
	});
	
	/*Menus*/	
	$('#mainnav > ul').on('click','li',function(i){
		var menuitem = $(this).index();
		switch(menuitem)
		{
			case 0:
				scrollToPage(startabout);
				break;
			case 1:
				scrollToPage(startstaff);
				break;
			case 2:
				scrollToPage(startcontact);
				break;
		}
			
	});
});