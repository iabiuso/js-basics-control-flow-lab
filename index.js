function scuberGreetingForFeet(someValue){
  // Write your code here!


let message
  if (someValue <= 400){
    return message = 'This one is on me!';
  }
  else if (someValue <= 2000) {
    return message = 'other amount';
  }
  
  else if (someValue < 2500){
    return message = 'I will gladly take your thirty bucks.';
  }

  
  else {
    return message = 'No can do.';
  }



}

//------------------------------------------------------------------//

function ternaryCheckCity(nameCity){
  // Write your code here!
let message
  if (nameCity==='NYC'){
    return message = "Ok, sounds good.";
  }
  else {
    return message = "No go.";
    
  }
  
}

//-----------------------------------------------------------------//

function switchOnCharmFromTip(tipAmount){
  // Write your code here!

let message
if (tipAmount === 'generous'){
  return message = 'Thank you so much.';
}
else if (tipAmount === 'not as generous'){
  return message = 'Thank you.';
}

else {
  return message = 'Bye.';
}




}