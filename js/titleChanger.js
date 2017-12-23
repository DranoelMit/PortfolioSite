const wordCycle = ["| ", "T|", "Ti|",  "Tim|", "Tim |", "Tim L|",  "Tim Le|",
 "Tim Leo|",  "Tim Leon|", "Tim Leona|",  "Tim Leonar|" ];
var counter =0;
var boolSwitch = true;


window.setInterval(function changeTitle()
{
     if(counter < wordCycle.length){
          document.title = wordCycle[counter];
          document.getElementById("pageTitle").innerHTML= wordCycle[counter];
          counter++;
     }

     else if(boolSwitch){
          document.title = "Tim Leonard";
          document.getElementById("pageTitle").innerHTML = "Tim Leonard";
          boolSwitch = false;
          }

     else {
          document.title = "Tim Leonard|";
               document.getElementById("pageTitle").innerHTML="Tim Leonard";
          boolSwitch = true;
          }


}, 250);
