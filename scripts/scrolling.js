$(window).load(function(){

	$(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		
		/*landing to about*/
		if(scrolled < startabout)
		{
			$('#heroimg-lvl1').css('margin-top',scrolled);
			$('#mainnav').removeClass('menubar');
		}else $('#heroimg-lvl1').css('margin-top','0px');
		/*.............................................................*/
		
		/*about page*/
		if((scrolled >= startabout) && (scrolled <= startstaff))
		{
			if(scrolled >= startabout)
			{
				resetMenuActive();
				$('#mainnav').addClass('menubar');
			}
			$('#mainnav > ul > li:nth-child(1)').addClass('activemenu');
		}else
		{
			resetMenuActive();
		}
		/*.............................................................*/
		/*staff page*/
		if((scrolled >= startstaff) && (scrolled <= startcontact))
		{
			resetMenuActive();
			$('#mainnav > ul > li:nth-child(2)').addClass('activemenu');
		}
		/*.............................................................*/
		/*contact page*/
		if(scrolled >= startcontact)
		{
			resetMenuActive();
			$('#mainnav > ul > li:nth-child(3)').addClass('activemenu');
		}
		/*.............................................................*/
	});
});