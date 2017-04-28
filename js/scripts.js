//Global Variables




//Back-End


//Front-End
$(function() {
  $().submit(function(event) {
    event.preventDefault();
    var question1Answer = $("input:radioQ1[name=question1]:checked").val();
    alert(question1Answer);
    if (question1Answer === "frontEnd") {
      (".trackSuggestions").hide();
      ("#cssDesign").show();
    }
    else {
      alert("else");
    }



  });
});
