// Task 18
// Async/Await with Fetch
async function Post() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data.slice(0, 5))
    }
    catch (error){
        console.error("Error", error)
    }
}
Post()