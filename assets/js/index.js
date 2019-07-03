var email = "tshaik@berkeley.edu";
var map = {
    "resume": "resume",
    "email": "email (click to copy)",
    "linkedin": "linkedin",
    "github": "github",
    "quora": "quora",
    "medium": "medium"
};

$(".link").each(function(index) {
    $(this).hover(function() {
    var key = $(this).attr('id');
    $("#welcome").text(map[key] + ".");
    }, function() {
    $("#welcome").text("welcome.");
    });
});

function copyEmail() {
    var $email_tag = $("<input>");
    $("body").append($email_tag);
    $email_tag.val(email).select();
    document.execCommand("copy");
    $email_tag.remove();
}