/*  Handels componentspecific one after the other */
$( document ).ready(function() {
  //dashboard();
});






/* ****************************************** SIDE-BAR ********************************** */
function dashboard() {
  $('a').click(function(){
    $('#dateInput').datepicker({
      dateFormat : "dd.mm.yy"
    });

  });

  $('#dateInput').datepicker({
      dateFormat : "dd.mm.yy"
    });


}






