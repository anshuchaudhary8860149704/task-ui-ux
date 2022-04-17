

//global variable
var output 
var chatNumber =" ";
var chatNumber2 = " ";
// function to minimize chat header when user scroll in chat box area
// const elem = document.getElementById("chatBody");
// elem.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const elem = document.getElementById("chatBody");
  console.log("scrolling")
    const head = document.getElementById("header");
    const chatBody = document.getElementById("chatBody");
  
 
 if(elem.scrollTop > 15){
  head.classList.add("minimum-profile");
    chatBody.classList.add("maximum-chat");
  }
  else {
    head.classList.remove("minimum-profile");
    chatBody.classList.remove("maximum-chat");

  }
 
}

//function to popup  chat
function popChat(){
  const  elem = document.getElementById("chatBox-wrapper");
  if(elem.classList.contains("fullscreen-chat")){
    elem.classList.remove("fullscreen-chat");
    }
  elem.classList.add("popup-chat");
  elem.classList.remove("pop-chat-out");
}

function openChat(){
  const elem = document.getElementById("chatBox-wrapper");
  if(elem.classList.contains("d-none")){
    elem.classList.remove("d-none");
    elem.classList.add("pop-chat-out");
  }
  else if(elem.classList.contains("popup-chat")){
    elem.classList.remove("popup-chat");
    elem.classList.add("pop-chat-out");
  }
  else{
    elem.classList.add("pop-chat-out");
  }

}

// function for fullscreen button in header to make chat fullscreen


 function toggleFullscreen() {
  const container = document.getElementById("chatBox-wrapper");
  if(container.classList.contains("fullscreen-chat")){
    container.classList.remove("fullscreen-chat");
  }
  else{
    container.classList.add("fullscreen-chat");
  }
  console.log("working");
	
    defaultScroll();
};



// chat function
var botMassageid = " ";
function detectUserinput(){
  

  var massage = document.getElementById("user-input").value;
  if(massage == ""){
    
    alert("Empty Massage Can Not Be Sent");
  }
  else{
    var userMassage = document.getElementById("chat-output");
    // Create an "li" node:
   const node = document.createElement("div");
   node.classList.add("user-massage");
   const child = document.createElement("div");
   child.classList.add("message");
   node.appendChild(child);
   // Create a text node:
   const textnode = document.createTextNode(massage);
   child.appendChild(textnode)
   document.getElementById("chat-output").appendChild(node);
   document.getElementById("user-input-form").reset();
   window.scrollBy(0, 200);
   if(massage == "help"){
     botMassageid = chatNumber;
     
   }
   else{
     
   }
   //for bot dummy msg
   setTimeout(() => {
    chatNumber = Math.floor((Math.random() * 1000000) + 1);
    chatNumber2 = Math.floor((Math.random() * 1000000) + 1);
   // var userMassage = document.getElementById("chat-output");
    // Create an "div" node:
   const node = document.createElement("div");
   node.classList.add("bot-massage");
   if(massage == "help"){
     
     node.setAttribute("id",chatNumber);
     setTimeout( () =>{addCode()}, 1000);
     
   }
   
   const nodesecond = document.createElement("div");
   nodesecond.classList.add("profile-photo-container");
   
   const imageNode = document.createElement("img");
   imageNode.classList.add("profile-photo");
   imageNode.setAttribute("src","assets/display-picture.svg");
   
   const child = document.createElement("div");
   child.classList.add("message");
   child.setAttribute("id",chatNumber2);
   
   const childsecond = document.createElement("div");
   childsecond.classList.add("w-100");
   
   setTimeout( () =>{addChatTime()}, 100);
   nodesecond.appendChild(imageNode);
   node.appendChild(nodesecond);
   node.appendChild(childsecond);
   childsecond.appendChild(child);
   // Create a text node:
   
   const textnode = document.createTextNode("hi i am a bot i can help you with my AI");
   child.appendChild(textnode)
   document.getElementById("chat-output").appendChild(node);
   window.scrollBy(0, 200);
   }, 1000);
  }
  console.log(typeof massage)
  console.log(massage);
 
}


//send file

var loadFile = function(event) {
  
  const identifier = Math.floor((Math.random() * 10000) + 1);
  const parent = document.createElement("div");
parent.classList.add("attachment-container");
  const child = document.createElement("img");
child.classList.add("attached");
child.setAttribute("id",identifier);
child.setAttribute("class","image-attached");
parent.appendChild(child);
document.getElementById("chat-output").appendChild(parent);

output = document.getElementById(identifier);
output.src = URL.createObjectURL(event.target.files[0]);
window.scrollBy(0, 200);

};

// add time in chat msg

function addChatTime() {
  console.log("chat time")
  
  document.getElementById(chatNumber2).insertAdjacentHTML("afterend",
      "<div class='chat-detail-container'><p class='chat-owner'>Fusce Bot</p><p class='chat-timing'>Just now</p></div>"
      );
}

//add carousel
 function addCode() {
  console.log("working msg bbbb")
  document.getElementById(chatNumber).insertAdjacentHTML("afterend",
      "<div class='carousel-wrapper'><button class='ripple-button left-button' id='left' onclick='goLeft()'><img class='ripple-img' src='assets/chevron-tiles.svg' /></button><div id='carousel-container' class='carousel-container'><div class='carousel-tile'><div class='image-container'><img class='image' src='assets/tile-image.svg' /></div><div class='product-description'><h1 class='title'>Omnichannel AI services</h1><p class='description'>Automatically resolve customer inquiries at industry’s highest rate over messaging</p></div><button class='action-cta'>Book a Demo</button></div><div class='carousel-tile'><div class='image-container'><img class='image' src='assets/second-tile.svg' /></div><div class='product-description'><h1 class='title'>Omnichannel AI for customer services</h1></div><button class='action-cta'>Book a Demo</button></div><div class='carousel-tile'><div class='product-description'><h1 class='title'>Omnichannel AI for customer services</h1><p class='description'>Automatically resolve customer inquiries at industry’s highest rate over messaging</p></div><button class='action-cta'>Explore<img class='explore-image' src='assets/explore.svg' /></button></div></div><div class='indicator-wrapper'><div class='indicator' id='0'></div><div class='indicator' id='1'></div><div class='indicator' id='2'></div></div><button class='ripple-button right-button' id='right' onclick='goRight()'><img class='ripple-img' src='assets/chevron-tiles.svg' /></button></div>");
      window.scrollBy(0, 200);
      defaultScroll()
}


//scroll carousel

var indicator = 1;
  function defaultScroll() {
  
  console.log("ssscroll");
  const elem = document.getElementById("chatBox-wrapper");
  if(elem.classList.contains("fullscreen-chat")){
    document.getElementById('carousel-container').scrollLeft -= 180;
  document.getElementById(indicator).classList.add("indicator-bg");
    console.log("have fullscreen class");
  }
  else{
    document.getElementById('carousel-container').scrollLeft += 220;
  document.getElementById(indicator).classList.add("indicator-bg");
    console.log("no class found");
  }
  
};
function goRight() {
  document.getElementById('carousel-container').scrollLeft += 220;
  indicator += 1;
  document.getElementById(indicator - 1).classList.remove("indicator-bg");
  document.getElementById(indicator).classList.add("indicator-bg");
 console.log(indicator)
  if(indicator >= 2){
    document.getElementById("right").style="display:none";
  }
  else{
    document.getElementById("left").style="display:block";
  }
};
function goLeft() {
  document.getElementById('carousel-container').scrollLeft -= 220;
  indicator -= 1;
  document.getElementById(indicator + 1).classList.remove("indicator-bg");
  document.getElementById(indicator).classList.add("indicator-bg");
  console.log(indicator)
  if(indicator <= 0){
    document.getElementById("left").style="display:none";
  }
  else{
    document.getElementById("right").style="display:block";
  }
};