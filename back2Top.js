	// JavaScript back2Top function
	$("#back2Top").hide();
	var timeOut;
	function scrollToTop() {
	  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-35);
		timeOut=setTimeout('scrollToTop()',10);
	  }
	  else clearTimeout(timeOut);
	}
    