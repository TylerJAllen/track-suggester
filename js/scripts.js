//Global Variables




//Back-End


//Front-End
$(function() {
  $("#formSurvey").submit(function(event) {
    event.preventDefault();
    //Local Variables
    var question1Answer = $("input:radio[name=question1]:checked").val();
    var question2Answer = $("input:radio[name=question2]:checked").val();
    var question3Answer = $("input:radio[name=question3]:checked").val();
    var question4Answer = $("input:radio[name=question4]:checked").val();
    var question5Answer = $("input:radio[name=question5]:checked").val();


    if (question1Answer === "frontEnd") {
      $(".trackSuggestions").hide();
      $("#css").show();
      $("#design").show();
    }
    else if (question2Answer === "mobile"){
      $(".trackSuggestions").hide();
      $("#java").show();
      $("#android").show();
    }
    else if (question3Answer === "yes") {
      if (question4Answer == "small") {
        $(".trackSuggestions").hide();
        $("#ruby").show();
        $("#rails").show();
      }
      else if (question4Answer === "large") {
        $(".trackSuggestions").hide();
        $("#cSharp").show();
        $("#net").show();
      }
    }
    else if (question2Answer === "desktop" && question3Answer === "no" && question5Answer === "management") {
      $(".trackSuggestions").hide();
      $("#php").show();
      $("#drupal").show();
    }
    else if (question2Answer === "desktop" && question3Answer === "no" && question5Answer === "interactive"){
      $(".trackSuggestions").hide();
      $("#php").show();
      $("#react").show();
    }
  });
});
