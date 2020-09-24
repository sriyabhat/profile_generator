const readline = require('readline');
let objSurvey = {};

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `,(answer) => {
    objSurvey.name = answer;
    rl.question(`What's an activity you like doing? `,(answer) => {
      objSurvey.activity = answer;
      rl.question(`What do you listen to while doing that? `,(answer) => {
        objSurvey.music = answer;
        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `,(answer) => {
          objSurvey.meal = answer;
          rl.question(`What's your favourite thing to eat for that meal? `,(answer) => {
            objSurvey.food = answer;
            rl.question(`Which sport is your absolute favourite? `,(answer) => {
              objSurvey.sport = answer;
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `,(answer) => {
                objSurvey.superpower = answer;
                console.log(`${objSurvey.name} loves listening to ${objSurvey.music} while ${objSurvey.activity}, devouring ${objSurvey.food} for ${objSurvey.meal}, prefers ${objSurvey.sport} over any other sport, and is amazing at ${objSurvey.superpower}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });

  

  

  

  

  

  

  
  
  