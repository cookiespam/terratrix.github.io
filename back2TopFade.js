	
	//back2Top button fade In and Out
	$(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
        $("#back2Top").fadeIn(400);
     }
    else
     {
      $("#back2Top").fadeOut(400);
     }
 });