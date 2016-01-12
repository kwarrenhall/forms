$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var date1Input = $("input#date1").val();
    var date2Input= $("input#date2").val();
    var requestsInput = $("input#requests").val();

    $(".person1").text(person1Input);
    $(".date1").text(date1Input);
    $(".date2").text(date2Input);
    $(".requests").text(requestsInput);


    $("#story").show();

    event.preventDefault();
  });
});
