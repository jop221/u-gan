document.addEventListener('click', function(event) {
  var sidebar = document.querySelector('.sidebar');
  var sidebarChildren = sidebar.querySelectorAll('*');
  var isClickInsideSidebar = Array.from(sidebarChildren).includes(event.target);

  if (!isClickInsideSidebar) {
    sidebar.classList.remove('show');
  }
});