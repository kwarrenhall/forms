$(document).ready(function() {
  $("button#Meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
  //   $("ul#dog").prepend("<li>Roof!</li>");
  //
  });

  $("button#Roof").click(function() {
    $("ul#dog").prepend("<li>Roof!</li>");
    // $("ul#cat").prepend("<li>Meow!</li>");

});

});
