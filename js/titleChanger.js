const wordCycle = ["| ", "T|", "Ti|",  "Tim|", "Tim |", "Tim L|",  "Tim Le|",
 "Tim Leo|",  "Tim Leon|", "Tim Leona|",  "Tim Leonar|" ];
var counter =0;
var fadeCounter=0;
var boolSwitch = true;
var children = document.getElementById('details').getElementsByTagName('*');


var looper = window.setInterval(function changeTitle()
{
     if(counter < wordCycle.length){
          document.title = wordCycle[counter];
          document.getElementById("pageTitle").innerHTML= wordCycle[counter];
          counter++;
     }
     else
     {
          document.title = "Tim Leonard";
          document.getElementById("pageTitle").innerHTML = "Tim Leonard";
          window.setInterval(function fadeIn()
                    {

                              if(fadeCounter<children.length)
                              {
                                   let elm = children[fadeCounter];
                                   fadeCounter++;
                                    elm.style.opacity ="1.0";
                                    elm.style.transition = ".5s";
                              }
                              else clearInterval(looper);
                    }, 200);

     }

}, 225);
