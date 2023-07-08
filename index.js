let scoreForHome=document.getElementById ("the-home")
let scoreForGuest=document.getElementById ("the-guest")

 homecount = 0
 guestcount = 0

function plusonehome() {
  homecount = homecount + 1
  scoreForHome.textContent=homecount
}

function plustwohome() {
  homecount = homecount + 2
  scoreForHome.textContent=homecount
}

function plusthreehome() {
  homecount = homecount + 3
  scoreForHome.textContent=homecount
}   

function plusoneguest() {
  guestcount=guestcount+1
  scoreForGuest.textContent=guestcount
}

function plustwoguest() {
  guestcount=guestcount+2
  scoreForGuest.textContent=guestcount
}

function plusthreeguest() {
  guestcount=guestcount+3
  scoreForGuest.textContent=guestcount
}