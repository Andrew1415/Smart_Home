
$( document ).ready(function() {
    $("#menu10").hide();
    setTimeout(function(){
      $("#intro").fadeIn;
      setTimeout(function(){
        $("#intro").fadeOut();
        setTimeout(() => {
        $("#menu10").show();
        $("#menu10").fadeIn;
    }, 1000);
    }, 2000);
    }, 2000);
});