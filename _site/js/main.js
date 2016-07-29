//Loading script
$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
    $(".se-pre-con-home").fadeOut("slow");
});

//Load svg
$('#bg').load('bg.html');



//fullpage
var isPhoneDevice = "ontouchstart" in document.documentElement; 
$(document).ready(function() {
      //desktop               
      $(document).ready(function() {
          $('#fullpage').fullpage({
            navigation: true,
            scrollBar: true,
            loopTop: true,
            loopBottom: true,
            anchors:['info', 'link', 'geotrek', 'tapeop', 'growth', 'portshowlio', 'sdff','posters', 'allprojects'],
            onLeave: function(index, nextIndex, direction) {
              $('#flasher').hide();
            }
          });
      });
  
});

      




//lazyload
$(function() {
    $("img.lazy").lazyload({
      threshold : 200,
      effect : "fadeIn"
    });
});

// //Cycle script
// $('.slides').cycle({
//     fx:     'none',
//     speed:   550,
//     timeout: 5
// }).cycle("pause");

// // Pause &amp; play on hover
// $('.project-hover').hover(function(){
// 	$(this).find('.slides').addClass('active').cycle('resume');
// 	}, function(){
// 	$(this).find('.slides').removeClass('active').cycle('pause');
// });

//SVG animation test
function simulatePathDrawing(path) {
  // var path = document.querySelector('.squiggle-animated path');
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
  'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 1.5s ease-in-out';
  // Go!
  path.style.strokeDashoffset = '0';
  path.style.strokeWidth = '3px';
  path.style.fill = 'rgba(255,255,0,.12)';
}

var chars = $('.squiggle-animated path').on('mouseover', function(e) {
  simulatePathDrawing(this)
})

//Video player toggle button
$('video').click(function() {
  if (this.paused == false) {
      this.pause();
      // alert('music paused');
  } else {
      this.play();
      // alert('music playing');
  }
});

//Show/hide About
// $('#about-item').click(function(event){
//   event.stopPropagation();
//   event.preventDefault();
//   $('.about-wrap').fadeIn('slow');
//   $('.corner-home').fadeOut('slow');
// });
// $('.about-wrap').click(function(){
//   $('.about-wrap').fadeOut('slow');
//   $('.corner-home').fadeIn('slow');
// });

//Corner Link
$(document).ready(function() {
  setTimeout( function(){ 
    var dataNav = $('#fullpage').find('.active').data('navigation');
    var dataLink = $('#fullpage').find('.active').data('link');
    $('.corner-home').html(dataNav);
    $('.corner-home').attr("href", dataLink);
  }  , 75 );
});

$( window ).scroll(function() {
  setTimeout( function(){ 
    var dataNav = $('#fullpage').find('.active').data('navigation');
    var dataLink = $('#fullpage').find('.active').data('link');
    $('.corner-home').html(dataNav);
    $('.corner-home').attr("href", dataLink);
  }  , 75 );
});

$( window ).scroll(function() {
  if($(window).scrollTop() > 150) { //scrolled past the other div?
    var dataTitle = $('body').find('.active').data('title');
    $('.corner-project').html(dataTitle);
    $('.corner-project').removeClass('corner-project-up').addClass('corner-project-down');
  }
  else {
    $('.corner-project').removeClass('corner-project-down').addClass('corner-project-up');
  }
});

//Grid Corner Link
$('.grid-project').mouseover(function() {
   var dataGrid = $(this).data('description');
   $('.grid-corner-p').html(dataGrid);
 })
  .mouseleave(function() {
    $('.grid-corner-p').html('Designer & Front-end Developer');
  });

//Hide Nav2
$(document).ready(function() {
  if ($('.container').hasClass('thisisproject')) {
    $('.nav2').hide();
    $('.navbar-brand').addClass('navbar-push-right');
  }
});

//Video Hover
var figure = $(".home-video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

$(document).ready(function () {
    $(".all-projects-hover").hover(function () {
        $(this).find("video")[0].play();
    }, function () {
        var el = $(this).find("video")[0];
        el.pause();
        el.currentTime = 0;
    });
});


//Random number generator
function numberRandomizer(){
  var x = Math.floor((Math.random() * 80) + 10); //random number between 10 and 90
  return x;
}

//PROJECT ARRAYS!!!//
//Link Array
var linkArray = new Array();

linkArray[0] = new Image();
linkArray[0].src = 'img/Link/logopage.jpg';

linkArray[1] = new Image();
linkArray[1].src = 'img/Link/trains.jpg';

linkArray[2] = new Image();
linkArray[2].src = 'img/Link/wayfinding.jpg';

linkArray[3] = new Image();
linkArray[3].src = 'img/Link/businesscards.jpg';

linkArray[4] = new Image();
linkArray[4].src = 'img/Link/ticketsandcard.jpg';

linkArray[5] = new Image();
linkArray[5].src = 'img/Link/BrochureCoverMocks.jpg';

linkArray[6] = new Image();
linkArray[6].src = 'img/Link/brochure1.jpg';

linkArray[7] = new Image();
linkArray[7].src = 'img/Link/WebsiteMock.jpg';

linkArray[8] = new Image();
linkArray[8].src = 'img/Link/mobilemock.jpg';

//Tape Op Array
var tapeopArray = new Array();

tapeopArray[0] = new Image();
tapeopArray[0].src = 'img/TapeOp/contents.jpg';

tapeopArray[1] = new Image();
tapeopArray[1].src = 'img/TapeOp/jacco.jpg';

tapeopArray[2] = new Image();
tapeopArray[2].src = 'img/TapeOp/sufjan1.jpg';

tapeopArray[3] = new Image();
tapeopArray[3].src = 'img/TapeOp/tapeopbrowser.jpg';

tapeopArray[4] = new Image();
tapeopArray[4].src = 'img/TapeOp/westernfirst.jpg';

tapeopArray[5] = new Image();
tapeopArray[5].src = 'img/TapeOp/sharon.jpg';

tapeopArray[6] = new Image();
tapeopArray[6].src = 'img/TapeOp/temples.jpg';

//SDFF Array
var sdffArray = new Array();

sdffArray[0] = new Image();
sdffArray[0].src = 'img/sdff/billboardmock.jpg';

sdffArray[1] = new Image();
sdffArray[1].src = 'img/sdff/bobnews.jpg';

sdffArray[2] = new Image();
sdffArray[2].src = 'img/sdff/closedoor.jpg';

sdffArray[3] = new Image();
sdffArray[3].src = 'img/sdff/nickposter.jpg';

sdffArray[4] = new Image();
sdffArray[4].src = 'img/sdff/amyposter.jpg';

sdffArray[5] = new Image();
sdffArray[5].src = 'img/sdff/bobtote.jpg';

//Baby Array
var babyArray = new Array();

babyArray[0] = new Image();
babyArray[0].src = 'img/baby/babyboy.jpg';

babyArray[1] = new Image();
babyArray[1].src = 'img/baby/babypackaging.jpg';

babyArray[2] = new Image();
babyArray[2].src = 'img/baby/babygirl.jpg';

babyArray[3] = new Image();
babyArray[3].src = 'img/baby/babypostermock.jpg';

babyArray[4] = new Image();
babyArray[4].src = 'img/baby/MagAd.jpg';

//Poster Array
var posterArray = new Array();

posterArray[0] = new Image();
posterArray[0].src = 'img/posters/microbreweriesweb.jpg';

posterArray[1] = new Image();
posterArray[1].src = 'img/posters/farmersback.jpg';

posterArray[2] = new Image();
posterArray[2].src = 'img/posters/shovel.jpg';

posterArray[3] = new Image();
posterArray[3].src = 'img/posters/skier.jpg';

posterArray[4] = new Image();
posterArray[4].src = 'img/hygiene.jpg';

posterArray[5] = new Image();
posterArray[5].src = 'img/dreamgirls.jpg';

//Angry Array
var angryArray = new Array();

angryArray[0] = new Image();
angryArray[0].src = 'img/angry/angryprofiles.jpg';

angryArray[1] = new Image();
angryArray[1].src = 'img/angry/array/angryhead.jpg';

angryArray[2] = new Image();
angryArray[2].src = 'img/angry/array/dataviz1.jpg';

angryArray[3] = new Image();
angryArray[3].src = 'img/angry/array/tideturn.jpg';

angryArray[4] = new Image();
angryArray[4].src = 'img/angry/array/hillarytrump.jpg';

angryArray[5] = new Image();
angryArray[5].src = 'img/angry/array/whatwillhappen.jpg';

angryArray[6] = new Image();
angryArray[6].src = 'img/angry/array/pullquote.jpg';


/*------------------------------------*/
function nextImage(element, imgArray, setWidth, randomize)
{
    if(randomize == 1) {
      var img = document.getElementById(element);

      for(var i = 0; i < imgArray.length;i++)
      {
          if(imgArray[i].src == img.src) // << check this
          {
              if(i === (imgArray.length-1)){
                  document.getElementById(element).src = imgArray[1].src;
                  document.getElementById(element).style.top = numberRandomizer() + '%';
                  document.getElementById(element).style.left = numberRandomizer() + '%';
                  document.getElementById(element).style.width = setWidth + '%';
                  break;
                  
              }
              document.getElementById(element).src = imgArray[i+1].src;
              document.getElementById(element).style.top = numberRandomizer() + '%';
              document.getElementById(element).style.left = numberRandomizer() + '%';
              document.getElementById(element).style.width = setWidth + '%';
              break;
          }
      }
    }
    else if(randomize == 0) {
      var img = document.getElementById(element);

      for(var i = 0; i < imgArray.length;i++)
      {
          if(imgArray[i].src == img.src) // << check this
          {
              if(i === (imgArray.length-1)){
                  document.getElementById(element).src = imgArray[1].src;
                  document.getElementById(element).style.top = '50%';
                  document.getElementById(element).style.left = '50%';
                  document.getElementById(element).style.width = setWidth + '%';
                  break;
                  
              }
              document.getElementById(element).src = imgArray[i+1].src;
              document.getElementById(element).style.top = '50%';
              document.getElementById(element).style.left = '50%';
              document.getElementById(element).style.width = setWidth + '%';
              break;
          }
      }

    }
  
}

function flash(setProject, setWidth, randomize) {
  document.getElementById('flasher').style.width = setWidth + '%';
  document.getElementById('flasher').src = setProject[0].src;
  flashy = setInterval(function(){ nextImage('flasher', setProject, setWidth, randomize) }, 1200);
}
function showFlash() {
  $('#flasher').show();
}
function hideFlash() {
  $('#flasher').hide();
  document.getElementById('flasher').src = 'img/blank.png';
}

