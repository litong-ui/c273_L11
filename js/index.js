$(document).ready(function () {
    var reviews = JSON.parse(localStorage.getItem("reviews"));
    var message = "";
    for (var i = 0; i < reviews.length; i++) {
        var movie = reviews[i];

        message += '<div class="card"><div class="card-header">' + movie.Title + '</div>';
        message += '<div class="card-body">' + movie.Plot + '</div></div><br/>';
    }
    $("#contents").html(message);
});
