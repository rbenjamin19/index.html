    //variable to record wins
    var wins = 0;
    //variable to record losses
    var losses = 0;
    //variables to store image values
    var generated =0;
    
    var crystals = [];
    //variable to store desired score
    var desired = 0;

    //my score
    var myScore = 0;
    var newScore = 0;

      //creates random # to choose word from the array
      function makeDesired(){
        desired += Math.floor(Math.random() *120) +19
        var desiredHTML =  "<h1>" + desired + "</h1>";
        document.querySelector("#desiredScore").innerHTML = desiredHTML;
      };

      makeDesired()
    function tester(){
    for(i=0; i<4; i++){
        function makeCrystals(i){
          generated = Math.floor(Math.random() *12) +1
        }
        makeCrystals(i);
      crystals.push(generated);
      }
    };
    tester()
    
      function evaluate(){
        if(newScore > desired){
        alert("You've Lost!");
        losses++;
        var html =  "<p>Wins: " + wins + "</p>" +
                  "<p>Losses: " + losses + "</p>";
        $("#game").html(html);
        $("#totalScore").html("<h1>0</h1>")
        newScore = 0;
        desired = 0;
        crystals = [];
        tester()
        makeDesired();
      }
        if(newScore == desired){
        alert("You've won!");
        wins ++;
        var html =  "<p>Wins: " + wins + "</p>" +
                  "<p>Losses: " + losses + "</p>";
        $("#game").html(html);
        $("#totalScore").html("<h1>0</h1>")
        newScore = 0;
        desired = 0;
        crystals = [];
        tester()
        makeDesired();
        }
      };

      $("#img1").on("click",function(){
        newScore += crystals[0]
         var newScoreHTML =  "<h1>" + newScore + "</h1>";
        document.querySelector("#totalScore").innerHTML = newScoreHTML;
        evaluate()
      });
      $("#img2").on("click",function(){
        newScore += crystals[1]
         var newScoreHTML =  "<h1>" + newScore + "</h1>";
        document.querySelector("#totalScore").innerHTML = newScoreHTML;
        evaluate()
      });
      $("#img3").on("click",function(){
        newScore += crystals[2]
         var newScoreHTML =  "<h1>" + newScore + "</h1>";
        document.querySelector("#totalScore").innerHTML = newScoreHTML;
        evaluate()
      });
      $("#img4").on("click",function(){
        newScore += crystals[3]
         var newScoreHTML =  "<h1>" + newScore + "</h1>";
        document.querySelector("#totalScore").innerHTML = newScoreHTML;
        evaluate()
      });
  
      