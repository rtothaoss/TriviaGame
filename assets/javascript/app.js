$(document).ready(function(){
    $('#start_button').click(function() {
        $(this).hide();
        $('#quiz').css("visibility", "visible");
    });  
});





function check() {
    
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(question4);
    console.log(question5);
    console.log(question6);
    console.log(question7);
    console.log(question8);


// Question 1 Logic

    if (question1 === "Goodfellas") {
        correct++;
    }
    else if (question1 === "") {
        unanswered++;
    }
    else  {
        incorrect++;
    }

// Question 2 Logic
    
    if (question2 === "The Mighty Morphin Power Rangers") {
        correct++;
    }
    else if (question2 === "") {
        unanswered++;
    }
    else {
        incorrect++;
    }
 
// Question 3 Logic

    if (question3 === "A Few Good Men") {
        correct++;
    }
    else if (question3 === "") {
        unanswered++;
    }
    else  {
        incorrect++;
    }
  
// Question 4 Logic

    if (question4 === "Boy Meets World") {
        correct++;
    }
    else if (question4 === "") {
        unanswered++;
    }
    else {
        incorrect++;
    }

// Question 5 Logic

    if (question5 === "Crash") {
        correct++;
    }
    else if (question5 === "") {
        unanswered++;
    }
    else {
        incorrect++;
    }
 
// Quesiton 6 Logic

    if (question6 === "Tamagotchi") {
        correct++;
    }
    else if (question6 === "") {
        unanswered++;
    }
    else  {
        incorrect++;
    }
 
// Quesiton 7 Logic

    if (question7 === "Elmo") {
        correct++;
    }
    else if (question7 === "") {
        unanswered++;
    }
    else  {
        incorrect++;
    }

// Question 8 Logic

    if (question8 === "Home Improvement") {
        correct++;
    }
    else if (question8 === "") {
        unanswered++;
    }
    else  {
        incorrect++;
    }

    console.log(correct);
    console.log(incorrect);
    console.log(unanswered);


    // document.getElementById("after_submit").style.visibility = "visible";
    $("#after_submit").css("visibility", "visible");

// Finished Button 
    
    $("#number_correct").text("Number Correct: " + correct);
    $("#number_incorrect").text("Number Incorrect: " + incorrect);
    $("#unanswered").text("Number Unanswered: " + unanswered);


}


