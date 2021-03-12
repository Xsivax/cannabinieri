$(document).ready(function(){
    // Add smooth scrolling to all links with #
    $("a").on('click', function(event) {
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
             // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
  } // End if
});
});

$(document).ready(function(){
  // Add smooth scrolling to all links with #
  $(".discover a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html , body').animate({
        scrollTop: $(hash).offset().top
      }, 5000, function(){
      window.location.hash = hash;
  });
} 
});
});

console.log('Out there ?');

const gallery= document.getElementById('gallery');

const test = document.getElementById('top-nav');

console.log(test);

console.log(gallery);