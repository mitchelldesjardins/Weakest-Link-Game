//Mitchell Desjardins
//Assignment: The Weakest Link
//Date: April 10 2019

// Player information logic to get the info
let playerFName = localStorage.getItem("Fname");
let playerLName = localStorage.getItem("Lname");
const divPlayerName = document.querySelector("#playerName");
divPlayerName.innerHTML = `Player Name: ${playerFName} ${playerLName}`;

let playerAge = localStorage.getItem("Age");
const divPlayerAge = document.querySelector("#playerAge");
divPlayerAge.innerHTML = `Player Age: ${playerAge}`;

let playerSex = localStorage.getItem("Sex");
const divPlayerSex = document.querySelector("#playerSex");
divPlayerSex.innerHTML = `Player Sex: ${playerSex}`;


//question and buttons
const divQuestion = document.querySelector("#question");
const buttonA = document.querySelector("#A");
const buttonB = document.querySelector("#B");
const buttonC = document.querySelector("#C");
const buttonD = document.querySelector("#D");

//Timer Javascript 
const roundDiv = document.querySelector("#roundDiv");
let counter = 120, roundNum = 1;

const div = document.querySelector("#timer");
const timer = setInterval(change, 1000);
div.innerHTML = `${counter}`;
roundDiv.innerHTML=`Round: ${roundNum}`;

function change(){
  counter--;
  div.innerHTML = `${counter}`;


  if(counter == 0){
    if(roundNum == 1){
      counter = 90; 
      round2();
    }
    else if (roundNum == 2){
      if(myMoney == 0){
        window.location.href = 'lose.html';
      }
      else{
        counter = 60;
        round3(); 
      }
    }
    else if (roundNum == 3){
      window.location.href = 'lose.html';
    }

   roundNum++;
   roundDiv.innerHTML=`Round: ${roundNum}`;
  }
  
  else {
    if (myMoney >= 500000 && roundNum == 1){
      myMoney = 500000;
      bankDiv.innerHTML=`${myMoney}`;
      roundNum++;
      roundDiv.innerHTML=`Round: ${roundNum}`;
      win = 0; 
      switchMoney();
      round2();
      counter = 90;

    }else if(myMoney >= 1000000 && roundNum == 2){
      myMoney = 1000000;
      bankDiv.innerHTML=`${myMoney}`;
      roundNum++;
      roundDiv.innerHTML=`Round: ${roundNum}`;
      counter = 60; 
      win = 0; 
      switchMoney();
      round3();

    }else if(roundNum == 3 && win == 5){
    window.location.href = 'win.html';
    }
  }
}

//display's round number


let win =0;
let futureMoney = 0;
let myMoney = 0;
let total = 0;

let moneyList = [0, 1000, 5000, 10000, 50000, 75000, 125000, 250000, 500000];

class Question 
{ //constructor for Question, possible answers, and one right answer
    constructor(t,oA,oB,oC,oD,rA){
      this.question=t;
      this.optionA=oA;
      this.optionB=oB;
      this.optionC=oC;
      this.optionD=oD;
      this.rightAnswer=rA;
    }
    askQuestion(){
      divQuestion.innerHTML=`${round[randomIndex].question}`;
      buttonA.innerHTML=`${round[randomIndex].optionA}`;
      buttonB.innerHTML=`${round[randomIndex].optionB}`; buttonC.innerHTML=`${round[randomIndex].optionC}`;
      buttonD.innerHTML=`${round[randomIndex].optionD}`;
    }
    answerQuestion(){
      
    }
}

// Questions for the three rounds that increase in difficulty 
const round=[];
  round.push(new Question("What is the first rule of Fight Club?", "Always talk about Fight Club", "Bring a dessert to Fight Club", "Be home before Midnight", "Never talk about Fight Club", 4)); //1
  round.push(new Question("Who went to school with a lamb?","Mary","Mitchell","Kadeem","Mr. Trump",1)); //2
  round.push(new Question("What temperature does water boil at?", "0C", "100C", "150C","75C",2)); //3
  round.push(new Question("What did the crocodile swallow in Peter Pan?", "Tinker Bell", "Peter Pan", "Alarm Clock", "The Map", 3)); //4
  round.push(new Question("Where is the smallest bone in the body?", "Finger Tip", "Ear", "Nose Tip", "Spine Disk", 2)); //5
  round.push(new Question("Who cut off Van Gogh’s ear?", "His Wife", "His Mother", "His Lover", "Himself", 4)); //6
  round.push(new Question("When did the Second World War end?", "1940", "1947", "1944", "1945", 4)); //7
  round.push(new Question("Which TV character said, “Live long and prosper”?", "Mr Spock from Star Trek", "Peter Griffen from Family Guy", "Anderson Cooper from CNN", "Mr Trump from Fox and Friends", 1)); //8
  round.push(new Question("What is the name of Batman’s butler?", "Mitchell", "Albert", "Alfred", "Ainstein", 3)); //9
  round.push(new Question("The average human body contains how many pints of blood?", "Nine", "Twelve", "Seven", "Sixteen",1)); //10
  round.push(new Question("The Pyrenees mountain range separates which two European countries?", "Germany and Spain", "France and Spain", "Spain and Italy", "Italy and France", 2)); //11
  round.push(new Question("Which of the planets is closest to the sun?", "Mars", "Mercury", "Jupiter", "Uranus", 2)); //12
  round.push(new Question("According to Greek mythology who was the first woman on earth?", "Eve", "Amazons", "Athena", "Pandora", 4)); //13
  round.push(new Question("What is the third sign of the Zodiac?", "Cancer", "Gemini", "Virgo", "Sagittarius", 2)); //14
  round.push(new Question("Entomology is the branch of science that studies what?", "Soil", "Dreams", "Insects", "Gems", 3)); //15
  round.push(new Question("Which is the most populous U.S. state?", "New York", "California", "Texas", "Florida", 2)); //16
  round.push(new Question(" Which virus causes bleeding in the body due to the destruction of blood vessels?", "Aids virus", "Ebola virus", "Pig Flu", "Hepatitis", 2)); //17
  round.push(new Question("Where in the human body would you find the medulla oblongata?", "The brain", "The knee", "The stomach", "The heart", 1)); //18
  round.push(new Question("Les Fauves was a name given to a group of artists that included Matisse. What is its literal meaning?", "The Painters", "The Wild Beasts", "The Muses", "The Lions", 2)); //19
  round.push(new Question("What color does gold leaf appear if you hold it up to the light?", "Gold", "Yellow", "Orange", "Green", 4)); //20
  round.push(new Question("How many legs does a lobster have?", "10", "8", "12", "16", 1)); //21
  round.push(new Question("HOW MANY POINTS DOES THE MAPLE LEAF ON THE FLAG HAVE?", "8", "9", "10", "11", 4)); //22
  round.push(new Question("Which Christian celebration is influenced by the Passover?", "Good Friday", "Palm Sunday", "Easter", "Pentecost", 1)); //23
  round.push(new Question("In what year was the first modern Olympic Games held?", "1820", "1896", "1877", "1836", 2)); //24
  round.push(new Question("Which videogame holds the record for having the highest budget ever to produce?", "World of Warcraft", "Skyrim", "Grand Theft Auto V", "Legend of Zelda: Breath of the Wild", 3)); // question 25
round.push(new Question("What year did WWII end?", "1955", "1945", "1960", "1942", "B"));//0
round.push(new Question("Where was the second atomic bomb dropped?", "Pearl Harbour", "Nagasaki", "Moscow", "Hiroshima", 2));//26
round.push(new Question("What conflict is referred to as The Great War?", "Vietnam War", "Korean War", "WWI", "Cold War", 3));//27
round.push(new Question("When did the Titanic sink?", "1903", "1930", "1919", "1912", "D"));//3
round.push(new Question("Who developed the World Wide Web?", "Steve Jobs", "Bill Gates", "William Gibson", "Tim Berners Lee", 4));//28
round.push(new Question("What year was Forest Gump released?", "1994", "1987", "2000", "1990", 1));//29
round.push(new Question("What island is the original Jurassic Park on?", "Isla Cruces", "Isla Fisher", "Isla Fritos", "Isla Nublar", 4));//30
round.push(new Question("What volcano does Frodo Baggins toss the One Ring into?", "Mount Peril", "Mount Fate", "Mount Doom", "Mount Fire", 3));//31
round.push(new Question("What Planet did Luke Skywalker grow up on?", "Tatooine", "Farlax", "Hoth", "Coruscant", 1));//32
round.push(new Question("What building do the bad guys take over in Die Hard?", "Nakatomi Plaza", "Matsumoto Plaza", "Imperial Plaza", "Nijo Plaza", 1));//33
round.push(new Question("Who is Simba's uncle?", "Scar", "Zazou", "Amos", "Slade", 1));//34
round.push(new Question("What super hero team did Deadpool put together in Deadpool 2?", "X-Team", "X-Factor", "X-Guys", "X-Force", 4));//35
round.push(new Question("How many Hunger Games were there?", "2", "4", "6", "8", 2));//36
round.push(new Question("Who does Tom Cruise play in Top Gun?", "Maverick", "Iceman", "Striker", "Goose", 1));//37
round.push(new Question("How many rows of Aliens are there at the start of a Space Invaders game?", "5", "4", "6", "3", 1));//38
round.push(new Question("What was Super Mario's name in Donkey Kong?", "Mr.Plumber", "Jumpman", "Antonio", "Mario", 2));//39
round.push(new Question("What was the highest reachable level in the original Pac-Man?", "300", "256", "125", "65", 2));//40
round.push(new Question("What classic game did Tony Stark catch a S.H.I.E.L.D member playing in the Avengers?", "Pac-Man", "Tetris", "Galaga", "Dig Dug", 3));//41
round.push(new Question("What is the name of the world in which World Of Warcraft takes place?", "Azeroth", "Hyrule", "Tamriel", "Tenno", 1));//42
//getNumber() function once called will ensure a random number is generated and stored into randomIndex variable.
function getNumber(){
  randomIndex= Math.floor(Math.random() * round.length);
  return randomIndex;
}

//remove() function once called will take the randomIndex number and splice our round array ensuring the question is deleted and removed from sequence 
function remove(){
  round.splice(randomIndex,1);
}


const availMoney = document.querySelector("#availMoney");


/*
//question and buttons
const divQuestion = document.querySelector("#question");
const buttonA = document.querySelector("#A");
const buttonB = document.querySelector("#B");
const buttonC = document.querySelector("#C");
const buttonD = document.querySelector("#D");*/
const money1 = document.querySelector("#right1");
const money2 = document.querySelector("#right2");
const money3 = document.querySelector("#right3");
const money4 = document.querySelector("#right4");
const money5 = document.querySelector("#right5");
const money6 = document.querySelector("#right6");
const money7 = document.querySelector("#right7");
const money8 = document.querySelector("#right8");

//Switches money based on the win counter, then set's to the default if win is 0 (incorrect, starting, banking)
function switchMoney(){
  if(win == 1){
    money1.src="../IMAGES/1kwin.png";
  }
  else if(win == 2){
    money2.src="../IMAGES/5kwin.png";
  }
  else if(win == 3){
    money3.src="../IMAGES/10kwin.png";
  }
  else if(win == 4){
    money4.src="../IMAGES/50kwin.png";
  }
  else if(win == 5){
    money5.src="../IMAGES/75kwin.png";
  }
  else if(win == 6){
    money6.src="../IMAGES/125kwin.png";
  }
  else if(win == 7){
    money7.src="../IMAGES/250kwin.png";
  }
  else if(win == 8){
    money8.src="../IMAGES/500kwin.png";
  }
  else{
    money1.src="../IMAGES/1000money.png";
    money2.src="../IMAGES/5000money.png";
    money3.src="../IMAGES/10000money.png";
    money4.src="../IMAGES/50kmoney.png";
    money5.src="../IMAGES/75kmoney.png";
    money6.src="../IMAGES/125kmoney.png";
    money7.src="../IMAGES/250kmoney.png";
    money8.src="../IMAGES/500kmoney.png";
  }
}

buttonA.addEventListener("click", function(){
  checkQuestion(1);
});
buttonB.addEventListener("click", function(){
  checkQuestion(2);
});
buttonC.addEventListener("click", function(){
  checkQuestion(3);
});
buttonD.addEventListener("click", function(){
  checkQuestion(4);
});

function newQuestion(){
  round[getNumber()].askQuestion();
}

function checkQuestion(ans){
  if(ans == round[randomIndex].rightAnswer){
    if(roundNum == 1 || roundNum == 2){
      win++;
      futureMoney += moneyList[win];
      availMoney.innerHTML=`${futureMoney}`;
      remove();
      newQuestion();
      switchMoney();}
    else{
      win++;
      remove();
      newQuestion();
    }
  }else{
    if(roundNum == 1 || roundNum == 2){
    win = 0;
    futureMoney = 0; 
    availMoney.innerHTML=`${futureMoney}`;
    remove();
    newQuestion();
    switchMoney();}
    else{
      alert(`LOSER`);
      window.location.href = 'lose.html';
    }
  }
}


//bank moneyList

const bankBut = document.querySelector("#bank");
bankBut.innerHTML="BANK IT";
const bankDiv = document.querySelector("#bankDisplay");
bankDiv.innerHTML=`Money will deposit here`;

bankBut.addEventListener("click", function(){
  myMoney = myMoney + futureMoney;
  futureMoney = 0;
  win = 0;
  availMoney.innerHTML=`${futureMoney}`;
  bankDiv.innerHTML=`${myMoney}`;
  switchMoney();
})


function round1(){    
    newQuestion();
  } 

function round2(){
    newQuestion();
}

function round3(){
  newQuestion();
}

round1();