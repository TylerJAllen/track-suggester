//Global Variables




//Back-End


//Front-End
$(function() {
  alert("hello");
  $("#formQuestionOne").submit(function(event) {
    event.preventDefault();
    var question1Answer = $("input:radio[name=question1]:checked").val();
    alert(question1Answer);
    if (question1Answer === "frontEnd") {
      $(".trackSuggestions").hide();
      $("#cssDesign").show();
    }
    else {
      $("#formQuestionTwo").show();
      $("#formQuestionTwo").submit(function(event) {
        event.preventDefault();
        var question2Answer = $("input:radio[name=question2]:checked").val();
        if (question2Answer === "frontEnd") {
          $(".trackSuggestions").hide();
          $("#cssDesign").show();
        }



    }
  });
});
