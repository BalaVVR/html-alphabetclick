// gamepage
var answer;
var question;
var q=0
var a=0;
var phonic =["apple","ball","cat","dog","elephant","fish","gorilla","hat","icecream",
    "jug","Kit","lion","monkey","nest","owl","pig","queen","rain","sun","train","umbrella",
    "van","watch","xerox","yellow","zoo"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
                ,"S","T","U","V","W","X","Y","Z"];



// $("#start").click(function(){
//     $("#start").text("Restart");
//     nextQuestion();
// })


function nextQuestion(){
    // currentQuestion=[];
    
    question = phonic[q];
    var letter = alphabet[q];
    // console.log(letter);
    $(".input-group-text").text(letter + " for:");
    
    $("#hint").click(function(){
        alert("Your Hint : It start's with "+question.charAt(0)+
        " and end's with "+question.charAt(question.length - 1));
    });
        // for (var i=0;i<question.length;i++){
    //     currentQuestion.push(question.charAt(i));
    // }
    // console.log(currentQuestion);
    // console.log(typeof currentQuestion); 
  
    // // After using Concatenation 
    // let result = currentQuestion.join(''); 
  
    // console.log(question); 
}

// $("input").keypress(function(event){
//     answer=[];
//     answer.push(event.key);
//     // console.log(answer);
//     console.log(event.key);
// });
// console.log(answer);

function myAnswer() {
    var answer = document.getElementById("myText").value;
    // console.log(answer);
    checkAnswer(answer);
  }

function checkAnswer(answer){
    if (question===answer){
        a++;
        $("#button").html('<button id="button" class="btn btn-success btn-lg px-4 gap-5">Submit</button>');
        $("h1").text("Your Score is " +a+" out of 26");
        
    }else{
        $("#button").html('<button id="button" class="btn btn-danger btn-lg px-4 gap-5">Submit</button>');
        $("h1").text("Game over . Your Score is " +a+" out of 26")
        document.getElementById('next').style.visibility='hidden';
    }
}
$("#next").click(function(){
    q++;
    nextQuestion();
    $("#button").html('<button id="button" "btn btn-primary btn-lg px-4 gap-5"">Submit</button>');
     });


nextQuestion();




