(function ($) {
  "use strict";
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
        isOpenImageModal: false,
        useSingleImg: false,
        singleImgUrl: '',
        rooms: [
          {
            room: '雙人房',
            context: '',
            roomImgs: [
              'img/room/房內衛浴.JPG',
            ]
          },
          {
            room: '三人房',
            context: '',
            roomImgs: [
              'img/room/單床.JPG',
              'img/room/雙床_1.JPG',
              'img/room/房內衛浴.JPG',
            ]
          },
          {
            room: '四人房',
            context: '',
            roomImgs: ['img/room/四人房.JPG']
          },
          {
            room: '家庭連通房',
            context: '',
            roomImgs: [
              'img/room/連通房_1.JPG',
              'img/room/連通房_2.JPG',
              'img/room/雙床_1.JPG',
              'img/room/房內衛浴.JPG',
            ]
          }
        ],
        events: [
          {
            eventId: 'event02',
            eventName: '中秋聯歡暨家屬感情聯繫活動',
            eventDate: '2023/09/16',
            eventOrganizer: '社團法人中華雲鵬展弘協會 | 雲鵬長照中心',
            imgs: [
              'img/event/20231115_01.jpg',
              'img/event/20231115_01.jpg',
            ]
          },
          { 
            eventId: 'event01',
            eventName: '雲鵬長照中心',
            eventDate: '2023/01/21',
            eventOrganizer: '雲鵬長照中心',
            imgs: [
              'img/event/20231114_01.jpg',
              'img/event/20231114_02.jpg',
              'img/event/20231114_03.jpg',
              'img/event/20231114_04.jpg',
              'img/event/20231114_05.jpg',
              'img/event/20231114_06.jpg'
            ]
          },
        ],
        modalImages: [],
      }
    },
    computed: {
      isMobile() {
        return window.innerWidth < 991;
      }
    },
    methods: {
      closeImageModal() {
        $('#imageCarouse').carousel(0)
        $('#imageModel').modal('hide');
      },
      prevCarousel() {
        $('#imageCarouse').carousel('prev');
      },
      nextCarousel() {
        $('#imageCarouse').carousel('next');
      },
      toggleMenu(type) {
        this.$refs[type].scrollIntoView({ behavior: 'smooth' });
        if (this.isMobile) $('.collapse').collapse('toggle');
      },
      getYear() {
        return new Date().getFullYear();
      },
      scrollTo(id) {
        this.$refs[id].scrollIntoView({ behavior: 'smooth', block: "center", });
      },
      openRoomImage(i, singleImgUrl) {
        this.useSingleImg = !!singleImgUrl;
        if(this.useSingleImg) {
          this.singleImgUrl = singleImgUrl;
        } else {
          this.modalImages = this.rooms[i].roomImgs;
        }
        this.isOpenImageModal = true;
        $('#imageModel').modal('show')
      }
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