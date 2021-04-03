// const spoler = document.querySelectorAll('.spoler__title');
// const spolerItem = document.querySelectorAll('.spoler__text');

// // const showSpoler = function() {

// // }
// spoler.addEventListener('click', () => {
//    spolerItem.classLict.toggle('active');
// });
$(document).ready(function() {
   $('.spoler__title').click(function(event) {
      if($('.spoler').hasClass('one')){
         $('.spoler__title').not($(this)).removeClass('active');
         $('.spoler__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });  
}); 
// slick spoler 

$(document).ready(function(){
  $('.carousel__inner').slick({
     dots: true,
     prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/left.svg"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/right.svg"></button>'
  });
});
