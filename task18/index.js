// ----------------Task 18----------------
// Try a wrong URL and handle the error gracefully.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(`Error`, error))    


fetch("https://jsonplaceholder.typicode.com/wrongendpoint") // wrong URL
  .then(response => {
    if (!response.ok) {
      // This will run if server returns 404, 500, etc.
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    console.error("Fetch failed:", error.message);  
  });

  




       