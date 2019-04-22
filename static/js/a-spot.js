$(function(){
  
  setInterval(rotate,2000);
  
});

function rotate(){
    var currentImage = $('#galary div.current');
    var nextImage = currentImage.next();

    if( nextImage.length === 0 )
      nextImage = $('#galary div:first');

    currentImage.removeClass('current').addClass('previous');
    nextImage.css('opacity',0)
      .addClass('current')
      .animate({'opacity':1},1000,function (){
          currentImage.removeClass('previous');
      });
  }