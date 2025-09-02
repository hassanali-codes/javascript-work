// TASK 18
// ---------------tASK 1--------------------
//Convert the previous fetch examples (GET posts, single post, POST new post) into async/await style.
// Post new Post (send data)

async function createPost(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "Post",
            body: JSON.stringify({
                title: "My Title",
                body: "This is the content of my post",
                userId: 101
            }),
            headers: {
                "content-type" : "application/json; charset=UTF-8"
            }
        });

        const newPost = await response.json()
        console.log("New Post Created: ", newPost)

    }
    catch (error) {
        console.error("Error creating Post:",error)
    }
}

createPost()  


