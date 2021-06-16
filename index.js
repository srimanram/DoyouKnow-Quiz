var readlinesync=require('readline-sync');
var score=0;
var username=readlinesync.question("What is Your name? ");
console.log("Welcome "+ username);
console.log("Lets see how much did you understand about Sriman");
  console.log("Are you Ready " +username);
  var ques=readlinesync.question("yes/no ");
  
  if(ques==="yes"){
    console.log ("that's good,lets go");
    
  }
  else{
    console.log("Then,sorry you can go!");
    console.log("see you soon!");
    console.log("ignore it");
  } 
 

function play(question,answer){
  var high=readlinesync.question(question);
  if(high===answer){
    console.log("you are right!");
    score=score+1;
  }
  else{
    console.log("ohh,your are wrong!");
  }
  console.log("your score for this question is "+ score);
}
console.log("Just enter the option(a/b)");
var array=[
  
  {question:"what is my name? (a)sriman,(b)shreeman ",
  answer:"a"},
  {
    question:"what is my age? ",
    answer:"18"
  },
  {
    question:"what I am studing? (a)IT,(b)CSE ",
    answer:"a"
  },
  {
    question:"My D.O.B: (a)11.02.2003,(b)24.03.2003 ",
    answer:"a"
  },
]

for(i=0;i<array.length;i++){
  var loop=array[i];
  play(loop.question,loop.answer);
}

console.log("your finally score is ", score,"/4");
console.log("Thanks for participating.......")
