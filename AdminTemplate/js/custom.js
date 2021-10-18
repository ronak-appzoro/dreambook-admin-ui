/** dashboard sidebar **/

$('.sidebar-toggle').click(function(){
  $('.dashboard_body').toggleClass('body_collapse');
});

$('.toggle-sidebar-left').click(function(){
  $('.dashboard_body').toggleClass('body_collapse_mobile');
});

