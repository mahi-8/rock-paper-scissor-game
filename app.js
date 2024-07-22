
let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector(".msg");


const user_score_para = document.querySelector(".user_score");
const comp_score_para = document.querySelector(".computer_score");



const show_winner = (user_win,user_choice,comp_choice) => {
    if(user_win){
        user_score++;
        user_score_para.innerText = user_score;
        message.innerText = `You Win ! your ${user_choice} beat ${comp_choice}`;
        message.style.backgroundColor = "#4CAF50";
        message.style.color = "#FFFFFF";

    }
    else{
        comp_score++;
        comp_score_para.innerText = comp_score;
        message.innerText = `You lose !  ${comp_choice} beats  your ${user_choice}`;
        message.style.backgroundColor = "#F44336";
        message.style.color = "#FFFFFF";
    }
}

const gen_comp_choice = () => {
  let options = ["rock", "paper", "scissors"];
  const ran_idx = Math.floor(Math.random() * 3);
  return options[ran_idx];
};


const tie_game = () => {
  message.innerText = "Game Tie ! Play Again";
  message.style.backgroundColor = "#FFC107";
  message.style.color = "#000000";

};


const play_game = (user_choice) => {
    const comp_choice = gen_comp_choice();

  if (user_choice === comp_choice) {
    
    // Game Tie
      tie_game();

  } else {
    let user_win = true;

    if (user_choice === "rock") {
       
        // scissors, paper
        user_win = comp_choice === "paper " ? false : true;
   
    } else if (user_choice === "paper") {

        //  rock , scissors
        user_win = comp_choice === "scissors" ? false : true;

    } else {

        // rock , paper
        user_win = comp_choice === "rock" ? false : true;
    }
    show_winner(user_win,user_choice,comp_choice);
  }
};



choices.forEach((choice) => {
  
  choice.addEventListener("click", () => {
    const user_choice = choice.getAttribute("id");
    play_game(user_choice);
  });
});
