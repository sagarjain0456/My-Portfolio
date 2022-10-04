function menuSlide() {
  document.getElementById('mid-navbar').style.left = '0px';
  document.getElementById('menu-cross-icon').style.display = 'inline-block';
    document.getElementById('mid-navbar').style.transition = 'all 0.3s ease';
}

function menuSlideHide() {
  document.getElementById('mid-navbar').style.left = '-500px';
  document.getElementById('menu-cross-icon').style.display = 'none';
  document.getElementById('mid-navbar').style.transition = 'all 0.3s ease';
}
