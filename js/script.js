   $("#imgDailyGreen").hover(function() {
                $(this).attr("src", "images/dailygreenmouseover.png");
            },
            function() {
                $(this).attr("src", "images/dailygreenweblogo.png");
    });

     $("#piperGisFrame").hover(function() {
                $("#piperGisToggle").fadeToggle();
    });

     $("#piperGisFrame").focus(function() {
                $("#piperGisToggle").fadeToggle();
    });

     $("#piperGisFrame").click(function() {
                $("#piperGisToggle").fadeToggle();
    });
