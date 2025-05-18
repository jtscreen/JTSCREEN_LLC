//Array
const headshot = [
  "headshot-gallery/arden1.jpg",
  "headshot-gallery/arden2.jpg",
  "headshot-gallery/kat1.JPG",
  "headshot-gallery/kat2.jpg",
  "headshot-gallery/Laurel2.jpg"
]

const production = [
  "production-gallery/godspell/godspell1.JPG",
  "production-gallery/godspell/godspell2.JPG",
  "production-gallery/godspell/godspell4.JPG",
  "production-gallery/godspell/godspell6.JPG",
  "production-gallery/godspell/godspell15.JPG",
  "production-gallery/godspell/godspell19.JPG",
  "production-gallery/godspell/godspell20.JPG",
  "production-gallery/artists/artists4.JPG",
  "production-gallery/artists/artists6.JPG",
  "production-gallery/artists/artists13.JPG",
  "production-gallery/artists/artists14.JPG",
  "production-gallery/artists/artists15.JPG",
  "production-gallery/kana7.JPG"
]

const grad = [
  "grad-gallery/Ara1.JPG",
  "grad-gallery/Ara2.JPG",
  "grad-gallery/Ara5.JPG",
  "grad-gallery/Gill4.JPG",
  "grad-gallery/Gill7.JPG",
  "grad-gallery/Gill9.JPG",
  "grad-gallery/kana8.JPG",
  "grad-gallery/kana10.JPG"
]

const portrait = [
  "portrait-gallery/julie4.jpg",
  "portrait-gallery/julie2.jpg",
  "portrait-gallery/julie1.jpg",
  "portrait-gallery/ghost1.jpg",
  "portrait-gallery/kana2.JPG",
  "portrait-gallery/kana5.JPG",
  "portrait-gallery/Bloodshot2.jpg",
  "portrait-gallery/Bloodshot3.jpg",
  "portrait-gallery/mock1.JPG",
  "portrait-gallery/mock2.JPG"
]

const event = [
  "event-gallery/shaddi14.jpg",
  "event-gallery/shaddi16.jpg",
  "event-gallery/shaddi17.jpg",
  "event-gallery/shaddi20.jpg",
  "event-gallery/shaddi13.jpg",
  "event-gallery/shaddi9.jpg",
  "event-gallery/india1.JPG",
  "event-gallery/india2.JPG",
  "event-gallery/india3.JPG",
  "event-gallery/india4.JPG",
  "event-gallery/india5.JPG",
  "event-gallery/india6.JPG",
  "event-gallery/kana3.JPG"
]

let h = 0; //headshot
let p = 0; //production
let g = 0; //grad
let r = 0; //portait
let e = 0; //event

//Headshot control
$("#count-headshot").text(h+1 + "/" + headshot.length);

$("#prev-headshot").click(function(){
  let img = document.getElementById("current-headshot");
  if(h <= 0){} 
  else{
    h-=1;
    img.src = "jtscreen/photo/" + headshot[h];
    $('#count-headshot').text((h+1) + '/' + headshot.length);
  }
})

$("#next-headshot").click(function(){
  let img = document.getElementById("current-headshot");
  if(h >= headshot.length-1){} 
  else{
    h+=1;
    $('#count-headshot').text((h+1) + '/' + headshot.length);
    img.src = "jtscreen/photo/" + headshot[h];
  }
})

//overlayed-headshot
$("#hidden-prev-headshot").click(function(){
  let img = document.getElementById("overlayHeadshotImage");
  let img2 = document.getElementById("current-headshot");
  if(h <= 0){} 
  else{
    h-=1;
    img.src = "jtscreen/photo/" + headshot[h];
    img2.src = "jtscreen/photo/" + headshot[h];
    $('#count-headshot').text((h+1) + '/' + headshot.length);
  }
})

$("#hidden-next-headshot").click(function(){
  let img = document.getElementById("overlayHeadshotImage");
  let img2 = document.getElementById("current-headshot");
  if(h >= headshot.length-1){} 
  else{
    h+=1;
    img.src = "jtscreen/photo/" + headshot[h];
    img2.src = "jtscreen/photo/" + headshot[h];
    $('#count-headshot').text((h+1) + '/' + headshot.length);
  }
})

//production control
$("#count-production").text(p+1 + "/" + production.length);
$("#prev-production").click(function(){
  let img = document.getElementById("current-production");
  if(p <= 0){} 
  else{
    p-=1;
    img.src = "jtscreen/photo/" + production[p];
    $('#count-production').text((p+1) + '/' + production.length);
  }
})

$("#next-production").click(function(){
  let img = document.getElementById("current-production");
  if(p >= production.length-1){} 
  else{
    p+=1;
    $('#count-production').text((p+1) + '/' + production.length);
    img.src = "jtscreen/photo/" + production[p];
  }
})

//overlayed production
$("#hidden-prev-production").click(function(){
  let img = document.getElementById("overlayProductionImage");
  let img2 = document.getElementById("current-production");
  if(p <= 0){} 
  else{
    p-=1;
    img.src = "jtscreen/photo/" + production[p];
    img2.src = "jtscreen/photo/" + production[p];
    $('#count-production').text((p+1) + '/' + production.length);
  }
})

$("#hidden-next-production").click(function(){
  let img = document.getElementById("overlayProductionImage");
  let img2 = document.getElementById("current-production");
  if(p >= production.length-1){} 
  else{
    p+=1;
    img.src = "jtscreen/photo/" + production[p];
    img2.src = "jtscreen/photo/" + production[p];
    $('#count-production').text((p+1) + '/' + production.length);
  }
})

//Grad control
$("#count-grad").text(g+1 + "/" + grad.length);
$("#prev-grad").click(function(){
  let img = document.getElementById("current-grad");
  if(g <= 0){} 
  else{
    g-=1;
    img.src = "jtscreen/photo/" + grad[g];
    $('#count-grad').text((g+1) + '/' + grad.length);
  }
})

$("#next-grad").click(function(){
  let img = document.getElementById("current-grad");
  if(g >= grad.length-1){} 
  else{
    g+=1;
    $('#count-grad').text((g+1) + '/' + grad.length);
    img.src = "jtscreen/photo/" + grad[g];
  }
})

//overlayed grad
$("#hidden-prev-grad").click(function(){
  let img = document.getElementById("overlayGradImage");
  let img2 = document.getElementById("current-grad");
  if(g <= 0){} 
  else{
    g-=1;
    img.src = "jtscreen/photo/" + grad[g];
    img2.src = "jtscreen/photo/" + grad[g];
    $('#count-grad').text((g+1) + '/' + grad.length);
  }
})

$("#hidden-next-grad").click(function(){
  let img = document.getElementById("overlayGradImage");
  let img2 = document.getElementById("current-grad");
  if(g >= grad.length-1){} 
  else{
    g+=1;
    img.src = "jtscreen/photo/" + grad[g];
    img2.src = "jtscreen/photo/" + grad[g];
    $('#count-grad').text((g+1) + '/' + grad.length);
  }
})

//Portrait
$("#count-portrait").text(r+1 + "/" + portrait.length);
$("#prev-portrait").click(function(){
  let img = document.getElementById("current-portrait");
  if(r <= 0){} 
  else{
    r-=1;
    img.src = "jtscreen/photo/" + portrait[r];
    $('#count-portrait').text((r+1) + '/' + portrait.length);
  }
})

$("#next-portrait").click(function(){
  let img = document.getElementById("current-portrait");
  if(r >= portrait.length-1){} 
  else{
    r+=1;
    $('#count-portrait').text((r+1) + '/' + portrait.length);
    img.src = "jtscreen/photo/" + portrait[r];
  }
})

//overlayed portrait
$("#hidden-prev-portrait").click(function(){
  let img = document.getElementById("overlayPortraitImage");
  let img2 = document.getElementById("current-portrait");
  if(r <= 0){} 
  else{
    r-=1;
    img.src = "jtscreen/photo/" + portrait[r];
    img2.src = "jtscreen/photo/" + portrait[r];
    $('#count-portrait').text((r+1) + '/' + portrait.length);
  }
})

$("#hidden-next-portrait").click(function(){
  let img = document.getElementById("overlayPortraitImage");
  let img2 = document.getElementById("current-portrait");
  if(r >= portrait.length-1){} 
  else{
    r+=1;
    img.src = "jtscreen/photo/" + portrait[r];
    img2.src = "jtscreen/photo/" + portrait[r];
    $('#count-portrait').text((r+1) + '/' + portrait.length);
  }
})

//Event
$("#count-event").text((e+1) + "/" + event.length);
$("#prev-event").click(function(){
  let img = document.getElementById("current-event");
  if(e <= 0){} 
  else{
    e-=1;
    img.src = "jtscreen/photo/" + event[e];
    $('#count-event').text((e+1) + '/' + event.length);
  }
})

$("#next-event").click(function(){
  let img = document.getElementById("current-event");
  if(e >= event.length-1){} 
  else{
    e+=1;
    $('#count-event').text((e+1) + '/' + event.length);
    img.src = "jtscreen/photo/" + event[e];
  }
})
//overlayed event
$("#hidden-prev-event").click(function(){
  let img = document.getElementById("overlayEventImage");
  let img2 = document.getElementById("current-event");
  if(e <= 0){} 
  else{
    e-=1;
    img.src = "jtscreen/photo/" + event[e];
    img2.src = "jtscreen/photo/" + event[e];
    $('#count-event').text((e+1) + '/' + event.length);
  }
})

$("#hidden-next-event").click(function(){
  let img = document.getElementById("overlayEventImage");
  let img2 = document.getElementById("current-event");
  if(e >= event.length-1){} 
  else{
    e+=1;
    img.src = "jtscreen/photo/" + event[e];
    img2.src = "jtscreen/photo/" + event[e];
    $('#count-event').text((e+1) + '/' + event.length);
  }
})

//Overlay Functions
$('#current-headshot').click(function(){
  const overlay = document.getElementById('hidden-headshot');
  let img = document.getElementById('overlayHeadshotImage');
  img.src = "jtscreen/photo/" + headshot[h];
  overlay.style.display = 'flex';
  $('#count-headshot').text((h+1) + '/' + headshot.length);
  overlay.removeAttribute("hidden");
});

$('#current-production').click(function(){
  const overlay = document.getElementById('hidden-production');
  let img = document.getElementById('overlayProductionImage');
  img.src = "jtscreen/photo/" + production[p];
  overlay.style.display = 'flex';
  $('#count-production').text((p+1) + '/' + production.length);
  overlay.removeAttribute("hidden");
});

$('#current-grad').click(function(){
  const overlay = document.getElementById('hidden-grad');
  let img = document.getElementById('overlayGradImage');
  img.src = "jtscreen/photo/" + grad[g];
  overlay.style.display = 'flex';
  $('#count-grad').text((g+1) + '/' + grad.length);
  overlay.removeAttribute("hidden");
});

$('#current-portrait').click(function(){
  const overlay = document.getElementById('hidden-portrait');
  let img = document.getElementById('overlayPortraitImage');
  img.src = "jtscreen/photo/" + portrait[r];
  overlay.style.display = 'flex';
  $('#count-portrait').text((r+1) + '/' + portrait.length);
  overlay.removeAttribute("hidden");
});

$('#current-event').click(function(){
  const overlay = document.getElementById('hidden-event');
  let img = document.getElementById('overlayEventImage');
  img.src = "jtscreen/photo/" + event[e];
  overlay.style.display = 'flex';
  $('#count-headshot').text((e+1) + '/' + event.length);
  overlay.removeAttribute("hidden");
});

//close
$('#hidden-close-headshot, #hidden-close-production, #hidden-close-grad, #hidden-close-portrait, #hidden-close-event').click(function(){
  $('#hidden-headshot').css("display", "none");
  $('#hidden-production').css("display", "none");
  $('#hidden-grad').css("display", "none");
  $('#hidden-portrait').css("display", "none");
  $('#hidden-event').css("display", "none");
})

//drop-down
$(".dropdown").click(function(){
    $("#drop").toggle("fast");
  });
$(".dropdown").mouseleave(function(){
    $("#drop").slideUp("fast");
});

/*hamburger*/
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