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
