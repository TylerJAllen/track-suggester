//Global Variables




//Back-End


//Front-End
$(function() {

  $("#formSurvey").submit(function(event) {
    event.preventDefault();
    var question1Answer = $("input:radio[name=question1]:checked").val();
    var question2Answer = $("input:radio[name=question2]:checked").val();
    var question3Answer = $("input:radio[name=question3]:checked").val();
    var question4Answer = $("input:radio[name=question4]:checked").val();
    var question5Answer = $("input:radio[name=question5]:checked").val();


    if (question1Answer === "frontEnd") {
      $(".trackSuggestions").hide();
      $("#cssDesign").show();
    }
    else if (question2Answer === "yes") {
      if (question3Answer == "small") {
        $(".trackSuggestions").hide();
        $("#rubyRails").show();
      }
      else if (question3Answer === "large") {
        $(".trackSuggestions").hide();
        $("#cSharpNet").show();
      }
    }

    else if (question2Answer === "no" && question4Answer === "mobile"){
      $(".trackSuggestions").hide();
      $("#javaAndroid").show();
    }
    else if (question2Answer === "no" && question4Answer === "desktop" && question5Answer === "management") {
      $(".trackSuggestions").hide();
      $("#phpDrupal").show();
    }
    else if (question2Answer === "no" && question4Answer === "desktop" && question5Answer === "interactive"){
      $(".trackSuggestions").hide();
      $("#phpReact").show();
    }
    else {
      alert(question2Answer);
      alert(question3Answer);
      alert(question4Answer);
      alert(question5Answer);
    }
  });
});
