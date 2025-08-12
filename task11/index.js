// DOM = DOCUMENT OBJECT MODEL
// object{} that represent  the page you see in the browser. and provides you with an API to interact with it. 
// web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree- like representastion.javascript can access the DOM 
// to dynamically change the content, structures and style of a web page.

document.title = "My website"
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// console.dir(document);

const username = "Hassan Ali"
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;