// ----------------Task 18----------------
//   Fetch a single post (/posts/1) and log it.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    console.log("single post", posts[0])
  })
  .catch(error => console.error("Error:", error));

  




       