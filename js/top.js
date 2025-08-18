document.addEventListener('DOMContentLoaded', function () {
  const pagetop = document.getElementById('pagetop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      pagetop.classList.add('visible');//縦方向のスクロール量が100以上の場合はclassを追加
    } else {
      pagetop.classList.remove('visible');//縦方向のスクロール量が100以下の場合はclassを削除
    }
  });

  pagetop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
    });
  });
});