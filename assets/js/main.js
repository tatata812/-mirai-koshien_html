$(function () {

  /* =================================
  ヘッダー
   ================================= */
  $(function () {
    const $btn = $('.header-menu-js');
    const $menu = $('.sp-menu');
    const $overlay = $('.sp-menu__overlay');
    const $body = $('body');

    function openMenu() {
      $btn.addClass('is-open').attr('aria-expanded', 'true');
      $menu.addClass('is-open').attr('aria-hidden', 'false');
      $overlay.addClass('is-open').attr('aria-hidden', 'false');
      $body.addClass('is-sp-menu-open');
    }

    function closeMenu() {
      $btn.removeClass('is-open').attr('aria-expanded', 'false');
      $menu.removeClass('is-open').attr('aria-hidden', 'true');
      $overlay.removeClass('is-open').attr('aria-hidden', 'true');
      $body.removeClass('is-sp-menu-open');
    }

    // ハンバーガーでトグル
    $btn.on('click', function () {
      if ($menu.hasClass('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // メニュー内の閉じるボタンで閉じる
    $('.sp-menu-js').on('click', function () {
      closeMenu();
    });

    // オーバーレイで閉じる
    $overlay.on('click', function () {
      closeMenu();
    });

    // メニュー内リンクを押したら閉じる
    $menu.on('click', 'a', function () {
      closeMenu();
    });

    // Escで閉じる
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && $menu.hasClass('is-open')) {
        closeMenu();
      }
    });
  });




  /* =================================
  アニメーション　フェードイン
 ================================= */
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $(".fade-in-js").each(function () {
      const targetPosition = $(this).offset().top; //要素の上からの距離
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("action");
      }
    });
  });

  /* =================================
  トップニュース
 ================================= */
  $(function () {
    $('.news-card-js').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: "15%",
            dots: true,
            arrows: false,

          }
        }
      ]
    });
  });



  /* =================================
  href="#" のページトップ戻り防止
  ================================= */
  // リロード前のスクロール位置を保存

  $(window).on('beforeunload', function () {
    sessionStorage.setItem('scrollTop', $(window).scrollTop());
  });

  // リロード後に元の位置へ戻す

  $(window).on('load', function () {
    const scrollTop = sessionStorage.getItem('scrollTop');
    if (scrollTop !== null) {
      $(window).scrollTop(Number(scrollTop));
      sessionStorage.removeItem('scrollTop');
    }
  });



})