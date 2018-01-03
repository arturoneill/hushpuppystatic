   //$("#imgDailyGreen").hover(function() {
     //           $(this).attr("src", "images/dailygreenmouseover.png");
       //     },
         //   function() {
           //     $(this).attr("src", "images/dailygreenweblogo.png");
  //  });

//index page fades
  $("#landingRestaurantFrame").hover(function() {
                $("#landingRestaurantToggle").fadeToggle("fast");
    });
  $("#landingRestaurantFrame").click(function() {
                $("#landingRestaurantToggle").fadeToggle("fast");
    });

  $("#landingErrandFrame").hover(function() {
                $("#landingErrandToggle").fadeToggle("fast");
    });
  $("#landingErrandFrame").click(function() {
                $("#landingErrandToggle").fadeToggle("fast");
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
