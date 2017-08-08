setTimeout(function() {
  document.body.className = "";
}, 600);

$(window).resize(function() {
  $(window).width() > $(window).height() ? $('#logo-center').width($(window).width()).height($(window).width()) : $('#logo-center').width($(window).height()).height($(window).height());
});

$(function() {
  $("#logo-svg").click(null, expandAbout);
});

var expandAbout = function() {
  $("#about").toggleClass("expand");

  if(window.getSelection) {
    if(window.getSelection().empty) { // Chrome
      window.getSelection().empty();
    } else if(window.getSelection().removeAllRanges) { // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if(document.selection) { // IE?
    document.selection.empty();
  }

}
