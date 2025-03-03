// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const grabHeart = document.querySelectorAll(".like-glyph");

function trial(e){
  const targetE = e.target;
  mimicServerCall("url")
    .then(function(){
      if (targetE.innerText === EMPTY_HEART) {
        targetE.innerText = FULL_HEART;
        targetE.className = "activated-heart";
      } else {
        targetE.innerText = EMPTY_HEART;
        targetE.className = "";
      }
    })
    .catch(function(error) {
      const modalId = document.getElementById("modal");
      modalId.className = "";
      modalId.innerText = error;
      setTimeout(() => modalId.className = "hidden", 3000)
    });
}


for (const like of grabHeart){
  like.addEventListener("click", trial);
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}




