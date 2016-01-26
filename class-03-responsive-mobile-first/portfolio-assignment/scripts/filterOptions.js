var filterView = {};


filterView.navTabs = function() {
  $('.top-nav').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).html()).fadeIn(1000);
  });
};

filterView.menu = function() {
  $('.icon-menu').on('click', function(event){
    event.preventDefault();
    $('.top-nav').toggle(1000);
  });
};

$(document).ready(function(){
  filterView.navTabs();
  filterView.menu();
  if(screen < 400){
    $('.icon-menu').click();
  }
});
