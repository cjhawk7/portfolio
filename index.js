$(".projectlink").on("click", function() {
  $(".intropage").addClass("hidden");
  $(".projectpage").removeClass("hidden");
  $(".mainpage").removeClass("hidden");
});

$(".mainpage").on("click", function() {
  $(".intropage").removeClass("hidden");
  $(".projectpage").addClass("hidden");
  $(".mainpage").addClass("hidden");
});

$(".mainbutton").on("click", function() {
  $(".intropage").addClass("hidden");
  $(".projectpage").removeClass("hidden");
  $(".mainpage").removeClass("hidden");
});

function footerAlign() {
  $(".footer").css("display", "block");
  $(".footer").css("height", "auto");
  var footerHeight = $(".footer").outerHeight();
  $("body").css("padding-bottom", footerHeight);
  $(".footer").css("height", footerHeight);
}

$(document).ready(function() {
  footerAlign();
});

$(window).resize(function() {
  footerAlign();
});
