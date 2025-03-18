//Hamburger
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

//Arrays
const headshotArray = [
  "../../img/home/headshot1.JPG",
  "../../img/home/headshot2.JPG",
  "../../img/home/headshot3.JPG"
];

const theater = [
  "tgallery/indecent1.JPEG",
  "tgallery/indecent2.JPEG",
  "tgallery/indecent3.JPEG",
  "tgallery/indecent4.JPEG",
  "tgallery/maine1.JPG",
  "tgallery/msbap1.JPEG",
  "tgallery/msbap2.JPEG",
  "tgallery/koda.JPEG",
  "tgallery/koda2.JPEG",
  "tgallery/koda3.JPEG",
  "tgallery/koda4.JPEG",
  "tgallery/koda5.JPEG",
  "tgallery/tos1.jpg",
  "tgallery/tos2.jpg",
  "tgallery/tos3.jpg"
]

const film = [
  "fgallery/home1.PNG",
  "fgallery/virgin1.JPG",
  "fgallery/yarn1.JPEG",
  "fgallery/yarn2.jpg"
]

const other = [
  "pGallery/pw1.JPG",
  "pGallery/pw2.JPG",
  "pGallery/pw3.JPG",
  "pGallery/pw4.JPG",
  "pGallery/pw5.JPG",
  "pGallery/pw6.JPG",
  "pGallery/pw7.JPG",
  "pGallery/pw8.JPG",
  "pGallery/pw9.JPG"
]

let i = 1;
let n = 0;
let currentGallery = 0;
let currentIndex;

//Headshot
function next(){
  $(".front-headshot").fadeOut(500, function () {
    $(".front-headshot").attr("src", headshotArray[i]);
    i = (i+1) % headshotArray.length;
    $(".front-headshot").fadeIn(100, function () {
      $(".back-headshot").attr("src", headshotArray[i]);
    });
  });
}
function auto(){next();}

$(document).ready(function() {
  setInterval(auto, 8000);
});

//Menu
$(".dropdown").click(function(){
    $("#drop").toggle("fast");
  });
$(".dropdown").mouseleave(function(){
    $("#drop").slideUp("fast");
});

//theater gallery
$('.theater p').click(function(){
  const overlay = document.getElementById('hidden-theater');
  let img = document.getElementById('overlayTheaterImage');
  img.src = theater[n];
  overlay.style.display = 'flex';
  $('#count-theater').text((n+1) + '/' + theater.length);
  overlay.removeAttribute("hidden");
});

//film gallery
$('.film p').click(function(){
  const overlay = document.getElementById('hidden-film');
  let img = document.getElementById('overlayFilmImage');
  img.src = film[n];
  overlay.style.display = 'flex';
  $('#count-film').text((n+1) + '/' + film.length);
  overlay.removeAttribute("hidden");
});

//other
$('.other p').click(function(){
  const overlay = document.getElementById('hidden-other');
  let img = document.getElementById('overlayOtherImage');
  img.src = other[n];
  overlay.style.display = 'flex';
  $('#count-other').text((n+1) + '/' + other.length);
  overlay.removeAttribute("hidden");
});

//Controls
$('#close-theater, #close-film, #close-other').click(function(){
  $('#hidden-theater').css("display", "none");
  $('#hidden-film').css("display", "none");
  $('#hidden-other').css("display", "none");
  n = 0;
})
//theater controls
$('#prev-theater').click(function(){
  let img = document.getElementById('overlayTheaterImage');
  if(n <= 0){} 
  else{
    n-=1;
    img.src = theater[n];
    $('#count-theater').text((n+1) + '/' + theater.length);
  }
})
$('#next-theater').click(function(){
  let img = document.getElementById('overlayTheaterImage');
  if(n >= theater.length-1){} 
  else{
    n+=1;
    $('#count-theater').text((n+1) + '/' + theater.length);
    img.src = theater[n];
  }
})
//film
$('#prev-film').click(function(){
  let img = document.getElementById('overlayFilmImage');
  if(n <= 0){} 
  else{
    n-=1;
    img.src = film[n];
    $('#count-film').text((n+1) + '/' + film.length);
  }
})
$('#next-film').click(function(){
  let img = document.getElementById('overlayFilmImage');
  if(n >= film.length-1){} 
  else{
    n+=1;
    $('#count-film').text((n+1) + '/' + film.length);
    img.src = film[n];
  }
})
$('#prev-other').click(function(){
  let img = document.getElementById('overlayOtherImage');
  if(n <= 0){} 
  else{
    n-=1;
    img.src = other[n];
    $('#count-other').text((n+1) + '/' + other.length);
  }
})
$('#next-other').click(function(){
  let img = document.getElementById('overlayOtherImage');
  if(n >= other.length-1){} 
  else{
    n+=1;
    $('#count-other').text((n+1) + '/' + other.length);
    img.src = other[n];
  }
})
