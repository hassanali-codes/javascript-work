// TASK 18
// ---------------tASK 1--------------------
//Convert the previous fetch examples (GET posts, single post, POST new post) into async/await style.
// Get a Single post (/post/1)
async function getSinglePost(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const Post = await response.json()

        console.log("Single Post: ", Post)
    }
    catch (error){
        console.error("Error fetching single post:", error)
    }
}
getSinglePost()

