$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val())
    const gender = $("select#gender").val();

    if (age){
    let quote = (100 - age) * 3;
    if (gender === "male" && age < 26) {
      quote += 50;
    }

    $("#rate").text(quote);
    $("#quote").show();
  } else {
    alert("please enter your age.");
  }
  
    event.preventDefault();
  });
});