$(document).ready(function () {
    $("#btnSearch").click(function () {

        var reviews = JSON.parse(localStorage.getItem("reviews"));

        if (reviews == null) {
            reviews = [];
        }

        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();

        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=d70b7fe6",
            dataType: "jsonp",
            success: function (response) {
                var message = "";
                message += "<b>Title: </b>" + response.Title + "<br/>";
                message += "<b>Released: </b>" + response.Released + "<br/>";
                message += "<b>Runtime: </b>" + response.Runtime + "<br/>";
                message += "<b>Genre: </b>" + response.Genre + "<br/>";
                message += "<b>Actors: </b>" + response.Actors + "<br/>";
                message += "<b>Plot: </b>" + response.Plot;

                $("#poster").html("<img src=" + response.Poster + "/>");

                reviews[reviews.length] = response;
                $("#contents").html(message);
                
                localStorage.setItem("reviews", JSON.stringify(reviews));
            },
            error: function () {
                console.log("error");
            }


        });
    });

});
