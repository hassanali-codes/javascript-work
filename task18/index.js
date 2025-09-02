// TASK 18
// ---------------tASK 1--------------------
//Convert the previous fetch examples (GET posts, single post, POST new post) into async/await style.
// GET ALL POSTS (first 5 titles)
async function getAllpost(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await response.json();

    console.log("First 5 post titles")
    data.slice(0, 5).forEach(post => console.log(post.title)) // step3: Log the first 5 titles
}
catch (error){
    console.error("Error fetching posts:", error)
}
}

getAllpost()

    