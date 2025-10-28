// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
    // console.log('click');
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // console.log('resize');
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});





// タブ
$('#smarttab').smartTab({
    enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});


document.querySelectorAll('.question-item').forEach(item => {
    let isSwitched = false;

    item.addEventListener('click', () => {
        item.querySelector('.question-img-normal-down').style.opacity = '0';
        item.querySelector('.question-img-hover-up').style.opacity = '1';
    });



    if (isSwitched) {
        normalImg.style.opacity = '1';
        hoverImg.style.opacity = '0';
    } else {
        normalImg.style.opacity = '0';
        hoverImg.style.opacity = '1';
    }

    isSwitched = !isSwitched;
});