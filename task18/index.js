// ----------------Task 18----------------
// Fetch all posts and print first 5 titles.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("first five elements:", data.slice(0, 5))
  })
  .catch(error => console.error("Error:", error));


       