//referenced: http://archive.oreilly.com/oreillyschool/courses/jquery/QuizzesAndProjects/Viewport_proj2.project.html
//generates the divs in a random location to start
function generateRandomFireflies(height, width, fireflies) {
  for (let i = 0; i < fireflies; i++) {
    let randomHeight = Math.floor(Math.random() * height);
    let randomWidth = Math.floor(Math.random() * width);
    $(`<div class='target' id="${i}"></div>`).appendTo(".game-board").css({
      top: randomHeight,
      left: randomWidth
    });
  };
};
//moves the divs on an interval
//referenced: https://www.w3schools.com/jsref/met_win_setinterval.asp
function moveFireflies() {
  setInterval(animateFireflies, 2000);
};
//function to determine the new random location
//referenced: https://stackoverflow.com/questions/41420075/jquery-move-div-around-screen
//referenced: https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
//referenced: https://www.w3schools.com/jquery/jquery_animate.asp
function animateFireflies() {
  for (let i = 0; i < fireflies; i++) {
    // reads the window size to set the max area to move items within
    height = $(window).height() - 100;
    width = $(window).width() - 100;
    let newHeight = Math.floor(Math.random() * height);
    let newWidth = Math.floor(Math.random() * width);
    $(`#${i}`).animate({
      top: newHeight,
      left: newWidth
    }, 3000);
  };
};
//displays the current time
function startTimer() {
  time = time + 1;
  $(".timer").html(time);
};