

var offsetNav  = $('#nav').offset(),
    offsetSec1 = $('#aboutConference').offset(),
    offsetSec2 = $("#ticket").offset(),
    offsetSec3 = $('#speakers').offset(),
    offsetSec4 = $('#program').offset(),
    offsetSec5 = $('#sponsors').offset(),
    offsetSec6 = $('#access').offset();
    // offsetSec7 = $('#contact').offset();
    
function offsetFunc(){
  offsetNav  = $('#nav').offset();
  offsetSec1 = $('#aboutConference').offset();
  offsetSec2 = $("#ticket").offset();
  offsetSec3 = $('#speakers').offset();
  offsetSec4 = $('#program').offset();
  offsetSec5 = $('#sponsors').offset();
  offsetSec6 = $('#access').offset();
  // offsetSec7 = $('#contact').offset();
}

$(function(){

  'use strict';

  var WINDOW_WIDTH  = $(window).innerWidth(),
      WINDOW_HEIGHT = $(window).height(),
      BREAKPOINTS   = 640,
      sctop = $(window).scrollTop();

  //ナビの開閉（モバイルのみ)
  $(".ico-menu").click(function(){
    if( 640 > WINDOW_WIDTH ){
      $(".nav").toggleClass("open");
    }
  });

  //コンテンツ部分をタップしたらメニューを閉じる（モバイルのみ）
  $(".contentsWrap").click(function(){
    if(640 > WINDOW_WIDTH){
      if($(".nav").hasClass("open")){
        $(".nav").toggleClass("open");
      }
    }
  });

  // ページトップ
  $(".pageTopBtn").hide(); // 初期表示
  $(".pageTopBtn").click(function(){
    $('body, html').animate({ scrollTop: 0 }, 400);
    return false;
  });

  offsetFunc();

  // ページ読み込み時にフェードインさせる要素
  $('#aboutConference .section__inner').addClass('appear');

  if(BREAKPOINTS < WINDOW_WIDTH){
    /*
     * スクロールでフェードイン
     */
    if(offsetSec2.top - WINDOW_HEIGHT/2 < sctop){
      $('#ticket .section__inner').addClass('appear');
    }
    if(offsetSec3.top - WINDOW_HEIGHT/2 < sctop){
      $('#speakers .section__inner').addClass('appear');
    }
    if(offsetSec4.top - WINDOW_HEIGHT/2 < sctop){
      $('#program .section__inner').addClass('appear');
    }
    if(offsetSec5.top - WINDOW_HEIGHT/2 < sctop){
      $('#sponsors .section__inner').addClass('appear');
    }
    if(offsetSec6.top - WINDOW_HEIGHT/2 < sctop){
      $('#access .section__inner').addClass('appear');
    }
    // if(offsetSec7.top - WINDOW_HEIGHT/2 < sctop){
    //   $('#contact .section__inner').addClass('appear');
    // }
  }else{
    /* -----------------------
     * モバイル幅時の処理
     -------------------------*/
    $('.nav').removeClass('fixed');
    $('.nav').removeClass('open');
    //aboutConference
    if(offsetSec1.top-WINDOW_HEIGHT < sctop){
    $('#aboutConference .section__inner').addClass('appear');
    }
    //ticket
    if(offsetSec2.top-WINDOW_HEIGHT < sctop){
    $('#ticket .section__inner').addClass('appear');
    }
    //speakers
    if(offsetSec3.top-WINDOW_HEIGHT < sctop){
    $('#speakers .section__inner').addClass('appear');
    }
    //program
    if(offsetSec4.top-WINDOW_HEIGHT < sctop){
    $('#program .section__inner').addClass('appear');
    }
    //sponsors
    if(offsetSec5.top-WINDOW_HEIGHT < sctop){
    $('#sponsors .section__inner').addClass('appear');
    }
    //access
    if(offsetSec6.top-WINDOW_HEIGHT < sctop){
    $('#access .section__inner').addClass('appear');
    }
    //contact
    // if(offsetSec7.top-WINDOW_HEIGHT < sctop){
    // $('#contact .section__inner').addClass('appear');
    // }
  }

  /*
  ----------------------------------------------------------
  スクロールイベント
  ----------------------------------------------------------
  */

  $(window).scroll(function(){

    sctop = $(window).scrollTop();

    setTimeout(function(){
      offsetFunc();
    },1000);

    /*
     * ページトップ 
     */
    if(200 < sctop){
      $('.pageTopBtn').fadeIn();
    }else{
      $('.pageTopBtn').fadeOut();
    }

    if(BREAKPOINTS < WINDOW_WIDTH){
      /* -----------------------
       * デスクトップ幅時の処理
       -------------------------*/
      if(sctop <= 400){
        // スクロールが400px以下時はナビの固定を解除
        $('.nav').removeClass('fixed');
      }else if(400 < sctop){
        // スクロールが400px以上時はナビをページ上部に固定
        $('.nav').addClass('fixed');
      }

      /*
       * スクロールでフェードイン
       */
      if(offsetSec2.top - WINDOW_HEIGHT/2 < sctop){
        $('#ticket .section__inner').addClass('appear');
      }
      if(offsetSec3.top - WINDOW_HEIGHT/2 < sctop){
        $('#speakers .section__inner').addClass('appear');
      }
      if(offsetSec4.top - WINDOW_HEIGHT/2 < sctop){
        $('#program .section__inner').addClass('appear');
      }
      if(offsetSec5.top - WINDOW_HEIGHT/2 < sctop){
        $('#sponsors .section__inner').addClass('appear');
      }
      if(offsetSec6.top - WINDOW_HEIGHT/2 < sctop){
        $('#access .section__inner').addClass('appear');
      }
      // if(offsetSec7.top - WINDOW_HEIGHT/2 < sctop){
      //   $('#contact .section__inner').addClass('appear');
      // }

      /*
       * ナビゲーションのcurrent
       */
      if(sctop <= offsetSec1.top-1){

        $('.nav li a').removeClass('on current');
      }else if(offsetSec1.top-1 <= sctop && sctop <= offsetSec2.top-1){
        //aboutConference
        $('.nav1 a').addClass('on current');
        $('.nav2 a').removeClass('on current');
        $('.nav3 a').removeClass('on current');
        $('.nav4 a').removeClass('on current');
        $('.nav5 a').removeClass('on current');
        $('.nav6 a').removeClass('on current');
      }else if(offsetSec2.top-1 <= sctop && sctop <= offsetSec3.top-1){
        //ticket
        $('.nav1 a').removeClass('on current');
        $('.nav2 a').addClass('on current');
        $('.nav3 a').removeClass('on current');
        $('.nav4 a').removeClass('on current');
        $('.nav5 a').removeClass('on current');
        $('.nav6 a').removeClass('on current');
      }else if(offsetSec3.top-1 <= sctop && sctop <= offsetSec4.top-1){
        //speakers
        $('.nav1 a').removeClass('on current');
        $('.nav2 a').removeClass('on current');
        $('.nav3 a').addClass('on current');
        $('.nav4 a').removeClass('on current');
        $('.nav5 a').removeClass('on current');
        $('.nav6 a').removeClass('on current');
      }else if(offsetSec4.top-1 <= sctop && sctop <= offsetSec5.top-1){
        //program
        $('.nav1 a').removeClass('on current');
        $('.nav2 a').removeClass('on current');
        $('.nav3 a').removeClass('on current');
        $('.nav4 a').addClass('on current');
        $('.nav5 a').removeClass('on current');
        $('.nav6 a').removeClass('on current');
      }
      else if(offsetSec5.top-1 <= sctop && sctop <= offsetSec6.top-1){
        //sponsors
        $('.nav1 a').removeClass('on current');
        $('.nav2 a').removeClass('on current');
        $('.nav3 a').removeClass('on current');
        $('.nav4 a').removeClass('on current');
        $('.nav5 a').addClass('on current');
        $('.nav6 a').removeClass('on current');
      }
      else if(offsetSec6.top-1 <= sctop){
        //access
        $('.nav1 a').removeClass('on current');
        $('.nav2 a').removeClass('on current');
        $('.nav3 a').removeClass('on current');
        $('.nav4 a').removeClass('on current');
        $('.nav5 a').removeClass('on current');
        $('.nav6 a').addClass('on current');
      }
    }else{
      /* -----------------------
       * モバイル幅時の処理
       -------------------------*/
      $('.nav').removeClass('fixed');
      $('.nav').removeClass('open');
      //aboutConference
      if(offsetSec1.top-WINDOW_HEIGHT < sctop){
      $('#aboutConference .section__inner').addClass('appear');
      }
      //ticket
      if(offsetSec2.top-WINDOW_HEIGHT < sctop){
      $('#ticket .section__inner').addClass('appear');
      }
      //speakers
      if(offsetSec3.top-WINDOW_HEIGHT < sctop){
      $('#speakers .section__inner').addClass('appear');
      }
      //program
      if(offsetSec4.top-WINDOW_HEIGHT < sctop){
      $('#program .section__inner').addClass('appear');
      }
      //sponsors
      if(offsetSec5.top-WINDOW_HEIGHT < sctop){
      $('#sponsors .section__inner').addClass('appear');
      }
      //access
      if(offsetSec6.top-WINDOW_HEIGHT < sctop){
      $('#access .section__inner').addClass('appear');
      }
      //contact
      // if(offsetSec7.top-WINDOW_HEIGHT < sctop){
      // $('#contact .section__inner').addClass('appear');
      // }
    }

  });

  // SPEAKERSのスライドトグル
  $('.speaker').not('.comming-soon').each(function(){
    var detailObj = $(this).find('.detail');
    var index = $('.speaker').index(this);

    $(this).css({zIndex:50-index});

    $(this).click(function(){
      detailObj.slideToggle();
      $(this).find('.openBtn').toggleClass('close');
    });

    if(BREAKPOINTS < WINDOW_WIDTH) {
      $(this).hover(
        function () {
          $(this).addClass('speakerHover');
        },
        function () {
          $(this).removeClass('speakerHover');
        }
      );
    }
  });
  $(function(){
    var start = 'touchstart';
    var end   = 'touchend';
    $('.speaker').bind(start,function(){
      $(this).addClass('speakerHover');
    });
    $('.speaker').bind(end,function(){
      $(this).removeClass('speakerHover');
    });
  });

  // PROGRAMのスライドトグル
  $('.session').each(function(){
    if(BREAKPOINTS < WINDOW_WIDTH) {
      $(this).hover(
        function () {
          $(this).addClass('sessionHover');
        },
        function () {
          $(this).removeClass('sessionHover');
        }
      );
    }
  });
  $(function(){
    var start = 'touchstart';
    var end   = 'touchend';
    $('.session').bind(start,function(){
      $(this).addClass('sessionHover');
    });
    $('.session').bind(end,function(){
      $(this).removeClass('sessionHover');
    });
  });

  //slideToggle
  $('.session').each(function(){
    var detailObj = $(this).next('.detail');
    $(this).click(function(){
      detailObj.slideToggle();
      $(this).find('.openBtn').toggleClass('close');
    });
  });
  $('.description .detail').each(function(){
    $(this).click(function(){
      $(this).slideToggle();
      $(this).prev('.session').find('.openBtn').toggleClass('close');
    });
  });

  //--------------------------------------------------------------
  //SPEAKERのカラム用クラス自動付与
  //--------------------------------------------------------------
  $('.speakerColumn .speaker:nth-child(odd)').each(function() {
    $(this).addClass('odd');
  });

});



//IE8以下だった場合にのみ注意を表示---------------------------------------------

jQuery(function($){
  var _ua = (function(){
    return {
      ltIE6:typeof window.addEventListener == 'undefined' && typeof document.documentElement.style.maxHeight == 'undefined',
      ltIE7:typeof window.addEventListener == 'undefined' && typeof document.querySelectorAll == 'undefined',
      ltIE8:typeof window.addEventListener == 'undefined' && typeof document.getElementsByClassName == 'undefined',
      ltIE9:document.uniqueID && typeof window.matchMedia == 'undefined',
      gtIE10:document.uniqueID && window.matchMedia,
      Trident:document.uniqueID,
      Gecko:'MozAppearance' in document.documentElement.style,
      Presto:window.opera,
      Blink:window.chrome,
      Webkit:typeof window.chrome == 'undefined' && 'WebkitAppearance' in document.documentElement.style,
      Touch:typeof document.ontouchstart != 'undefined',
      Mobile:typeof window.orientation != 'undefined',
      ltAd4_4:typeof window.orientation != 'undefined' && typeof(EventSource) == 'undefined',
      Pointer:window.navigator.pointerEnabled,
      MSPoniter:window.navigator.msPointerEnabled
    };
  })();

  if(_ua.ltIE8){
    $('.forOldIE').show();
  }
});
