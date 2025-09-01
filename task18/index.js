// ----------------Task 18----------------
// Post request with Fetch
fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    body : JSON.stringify({
        tittle: "sending data",
        body : "Hello world",
        userId : 1
    }),
    headers : {
        "content-type" : "applcation/JSON; charset=UTF-8"
    }
})
  .then(response => response.json())
  .then(data => console.log(data));

  




       