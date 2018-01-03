   $("#imgDailyGreen").hover(function() {
                $(this).attr("src", "images/dailygreenmouseover.png");
            },
            function() {
                $(this).attr("src", "images/dailygreenweblogo.png");
    });

     $("#piperGisFrame").hover(function() {
                $("#piperGisToggle").fadeToggle();
    });
