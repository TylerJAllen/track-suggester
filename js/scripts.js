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
      $("#cssDesign").show();
    }
    else if (question2Answer === "mobile"){
      $(".trackSuggestions").hide();
      $("#javaAndroid").show();
    }
    else if (question3Answer === "yes") {
      if (question4Answer == "small") {
        $(".trackSuggestions").hide();
        $("#rubyRails").show();
      }
      else if (question4Answer === "large") {
        $(".trackSuggestions").hide();
        $("#cSharpNet").show();
      }
    }
    else if (question2Answer === "desktop" && question3Answer === "no" && question5Answer === "management") {
      $(".trackSuggestions").hide();
      $("#phpDrupal").show();
    }
    else if (question2Answer === "desktop" && question3Answer === "no" && question5Answer === "interactive"){
      $(".trackSuggestions").hide();
      $("#phpReact").show();
    }
  });
});
