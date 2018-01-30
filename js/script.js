   //$("#imgDailyGreen").hover(function() {
     //           $(this).attr("src", "images/dailygreenmouseover.png");
       //     },
         //   function() {
           //     $(this).attr("src", "images/dailygreenweblogo.png");
  //  });

//index page fades
 
		
 $("#landingRestaurantFrame").hover(function() {
	 if ($(window).width() >= 767){
    
                $("#landingRestaurantToggle").fadeToggle();
	 }
     
    });
  $("#landingRestaurantFrame").click(function() {
	   if ($(window).width() >= 767){
    
                $("#landingRestaurantToggle").fadeToggle();
		    }
   
    });

  $("#landingErrandFrame").hover(function() {
	   if ($(window).width() >= 767){
    	
                $("#landingErrandToggle").fadeToggle();
		    }
    
    });
  $("#landingErrandFrame").click(function() {
	   if ($(window).width() >= 767){
  
                $("#landingErrandToggle").fadeToggle();
		    }
  
    });

//restaurant page fades

    $("#dailyGreenFrame").hover(function() {
                $("#dailyGreenToggle").fadeToggle("fast");
    });

     $("#dailyGreenFrame").focus(function() {
                $("#dailyGreenToggle").fadeToggle("fast");
    });

     $("#dailyGreenFrame").click(function() {
                $("#dailyGreenToggle").fadeToggle("fast");
    });



     $("#piperGisFrame").hover(function() {
                $("#piperGisToggle").fadeToggle("fast");
    });

     $("#piperGisFrame").focus(function() {
                $("#piperGisToggle").fadeToggle("fast");
    });

     $("#piperGisFrame").click(function() {
                $("#piperGisToggle").fadeToggle("fast");
    });

$('#MAPModal').on('shown.bs.modal', (function() {
  var mapIsAdded = false;

  return function() {
    if (!mapIsAdded) {
      $('.modal-map').html(' <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ednoEYxCJRQLIUdhxqD0z2Obl5V8qAMp" width="100%" height="300"></iframe>');

      mapIsAdded = true;
          
    }    
  };
})());
