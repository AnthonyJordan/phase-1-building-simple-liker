// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function handleError(error) {
  document.querySelector('div').classList.remove('hidden')
  document.querySelector('h2').innerText = error
  setTimeout(() => document.querySelector('div').classList.add('hidden'), 3000)
}

function handleHeart(e) {
  e.target.classList.toggle('activated-heart')
}

function doThings(e) {
  mimicServerCall().then(() => handleHeart(e)).catch(error => handleError(error))
}

let likes = document.querySelectorAll(".like")
for (const item of likes) {
  item.addEventListener('click', e => doThings(e))

}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
