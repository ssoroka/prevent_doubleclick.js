function do_nothing() { 
  return false;
}

// prevent a second click for 10 seconds. :)
$('.prevent_doubleclick').live('click', function(e) { 
  $(e.target).click(do_nothing); 
  setTimeout(function(){
    $(e.target).unbind('click', do_nothing);
  }, 10000); 
});
