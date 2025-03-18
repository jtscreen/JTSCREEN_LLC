$(".dropdown").click(function(){
    $("#drop").toggle("fast");
  });
$(".dropdown").mouseleave(function(){
    $("#drop").slideUp("fast");
});

$("#hamburger").click(function () {
  var text = $(".burger-symbol").text();

  if ($("#hamburger-links").css("display") === "none") {
      $("#hamburger-links").css("display", "flex").hide().fadeIn("fast");
  } else {
      $("#hamburger-links").fadeOut("fast", function () {
          $(this).css("display", "none");
      });
  }

  if (text == "") {
      $(".burger-symbol").text("≡");
  } else {
      $(".burger-symbol").text("");
  }

  if($(window).width()<800){
    $(".navName").toggle();
  }else if ($(window).width() > 800) {
    $(".navName").show();
  }
})