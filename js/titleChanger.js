const wordCycle = ["| ", "T|", "Ti|",  "Tim|", "Tim |", "Tim L|",  "Tim Le|",
 "Tim Leo|",  "Tim Leon|", "Tim Leona|",  "Tim Leonar|",  "Tim Leonard" ];
var counter =0;
var fadeCounter=0;
var boolSwitch = true;

window.onload = function(){
var looper = window.setInterval(function changeTitle()
{
     if(counter < wordCycle.length){
          document.title = wordCycle[counter];
          document.getElementById("pageTitle").innerHTML= wordCycle[counter];
          counter++;
     }
     else{
          return;
     }

}, 225);

}
