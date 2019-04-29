$(document).ready(function() {


  // a js object that stores the id's of our audio (see html)
  let sounds = {
      81 : 'kick-sound', //key q
      87 : 'snare-sound', //key w
      69 : 'hat-sound', //key e
      82 : 'glass-sound' //key r 
    }

  // This is basically what plays the music. on key down, 
  // we grab the sound associated with that key code and 
  // store it as variable called soundId. 
  // If soundId exists, we go to the beginning of that sound, and play it. 
  // This is important for longer audio files, or fast presses, 
  // basically it allows us to play a noise as fast as we want.
  // if soundId doesnt exist, we play the cowbell sound.
  document.onkeydown = function(e) {
      let soundId = sounds[e.keyCode];
      if (soundId) { 
        sound = document.getElementById(soundId);
      }
      else {
        sound = document.getElementById("cowbell-sound");
      }
      sound.currentTime = 0;
      sound.play();
    }


    $('body').on('keydown', function(e){
      // **************************************
      // DON'T CHANGE ANYTHING ABOVE THIS LINE 
      // **************************************



      // Add 5 total conditional statements for each respective key code,
      // 4 of these should be for the key codes listed in the sounds js object
      // and the last statement should cover the condition in which any other 
      // key is pressed. For each conditional, correct overlay should be shown and the faded out 
      // except for tthe 5th conditional.
      // hint: make use of e.which 
      // **************************
      // Create conditionals below
      // **************************








  });
  


  // A js object that stores the names of popular artists.
  // feel free to change the artists or add some! Make sure your 
  // for loops artist index corresponds to the number of artists 
  // in this object.

  let artists = {
      0 : 'Bruno Mars', 
      1 : 'Chance', 
      2 : 'Cardi B',
      3 : 'JJ Swagger',
      4 : 'Queen',
      5 : 'Miles Davis',
      6 : 'Taylor Swift',
      7 : 'Vulfpeck',
    }

  // HINT - Think about what the bounds of the for loop should be
  // HINT - $("body").append("<div class='red'></div>"); would add a 
  // new div with the class of 'red' to the body. Note how we are passing
  // in a string to .append()
  // HINT - You will be using string concatination; i.e. "race" + "car" returns "racecar"
  // HINT - We can get "apple" in let fruits = {4:"apple"} through fruits[4]
  // ************************************
  // Create your for loop below this line    
  // ************************************



  // Lab complete! Make sure you get checked off by a TA
});
