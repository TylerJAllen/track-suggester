//Global Variables




//Back-End


//Front-End
$(function() {

  $("#formQuestionOne").submit(function(event) {
    event.preventDefault();
    var question1Answer = $("input:radio[name=question1]:checked").val();
    alert(question1Answer);
    var question2Answer = $("input:radio[name=question2]:checked").val();
    alert(question2Answer);
    var question3Answer = $("input:radio[name=question3]:checked").val();
    alert(question3Answer);
    var question4Answer = $("input:radio[name=question4]:checked").val();
    alert(question4Answer);
    var question5Answer = $("input:radio[name=question5]:checked").val();
    alert(question5Answer);
    if (question1Answer === "frontEnd") {
      $(".trackSuggestions").hide();
      $("formQuestionTwo").show();
      $("#cssDesign").show();
    }
    else {
      //   if (question2Answer === "frontEnd") {
      //     $(".trackSuggestions").hide();
      //     $("#cssDesign").show();
        // }



    }
  });
});
