import { tweetsData } from '/Users/allenmathews/Development/Code/scrimba/twimba/data.js'
const tweetInput = document.getElementById("tweet-input")
const tweetBtn = document.getElementById("tweet-btn")

tweetBtn.addEventListener('click', function() {
    console.log(tweetInput.value)
})