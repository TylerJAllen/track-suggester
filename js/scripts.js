//Global Variables




//Back-End


//Front-End
$(function() {
  $("#formQuestionOne").submit(function(event) {
    event.preventDefault();
    var question1Answer = $("input:radio[name=question1]:checked").val();
    if (question1Answer === "frontEnd") {
      $(".trackSuggestions").hide();
      $("#cssDesign").show();
    }
    else {
    }



  });
});
