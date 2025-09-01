// ----------------Task 18----------------
// Create a new post with your own custom title/body and log the response.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",   // method: POST
  body: JSON.stringify({   // data we want to send
    title: "Task18 Js",
    body: "Created a new post with my own custom tittle/body",
    userId: 804
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8" // telling server it's JSON
  }
})
  .then(response => response.json())
  .then(data => console.log(data)); 





       