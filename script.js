//your JS code here. If required.
const element = document.getElementById('level');

// Initialize the DOM level variable
let domLevel = 0;

// Traverse up the DOM tree until reaching the topmost parent
let parent = element.parentNode;
while (parent !== null) {
  domLevel++;
  parent = parent.parentNode;
}

// Display the DOM level using alert()
alert("The level of the element is: " + domLevel);
