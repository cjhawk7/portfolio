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
