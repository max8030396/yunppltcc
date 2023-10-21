(function ($) {
  "use strict";
  

  $(document).ready(function() {
    $('select').niceSelect();

    
  });
  // menu fixed js code
  // $(window).scroll(function () {
  //   var window_top = $(window).scrollTop() + 1;
  //   if (window_top > 50) {
  //     $('.main_menu').addClass('menu_fixed animated fadeInDown');
  //   } else {
  //     $('.main_menu').removeClass('menu_fixed animated fadeInDown');
  //   }
  // });

$(document).ready(function() {
  $('select').niceSelect();

  var app = new Vue({
    el: '#app',
    data() {
      return {
        message: 'Hello Vue!',
        rooms: [
          {
            room: '單人房',
            context: '一些文案',
            alt: '單人房照片',
            currentImg: 'img/room/room_01.jpg',
            roomImgs: [
              'img/room/room_01.jpg',
              'img/room/room_02.jpg',
              'img/room/room_03.jpg',
              'img/room/room_04.jpg',
            ]
          },
          {
            room: '雙人房',
            context: '一些文案',
            alt: '單人房照片',
            currentImg: 'img/room/room_01.jpg',
            roomImgs: [
              'img/room/room_01.jpg',
              'img/room/room_02.jpg',
              'img/room/room_03.jpg',
              'img/room/room_04.jpg',
            ]
          },
          {
            room: '多人房',
            context: '一些文案',
            alt: '單人房照片',
            currentImg: 'img/room/room_01.jpg',
            roomImgs: [
              'img/room/room_01.jpg',
              'img/room/room_02.jpg',
              'img/room/room_03.jpg',
              'img/room/room_04.jpg',
            ]
          },
          {
            room: '更多人房',
            context: '一些文案',
            alt: '單人房照片',
            currentImg: 'img/room/room_01.jpg',
            roomImgs: [
              'img/room/room_01.jpg',
              'img/room/room_02.jpg',
              'img/room/room_03.jpg',
              'img/room/room_04.jpg',
            ]
          }
        ]
      }
    },
    methods: {
      test() {
        console.log(this.message)
      },
      getYear() {
        return new Date().getFullYear();
      },
      changeImg(room, img) {
        room.currentImg = img;
      },
      scrollTo(id) {
        this.$refs[id].scrollIntoView({ behavior: 'smooth',  block: "center", });
      }
    },
    created() {
      console.log(this)
    }
  })
});

var review = $('.client_review_part');
if (review.length) {
  review.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: false,
    smartSpeed: 2000,
  });
}

//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();




}(jQuery));



