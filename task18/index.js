// TASK 18
// -------------Task2---------------
// Create a function getUserPosts(userId) that fetches posts of a specific user.
async function getUserPosts(userId){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const posts = await response.json()

        console.log(`posts for User ${userId}`)
        posts.forEach(post => console.log(post.title))
            
    }
    catch (error){
        console.error("Error fetching user post: ", error)
    }
}
getUserPosts(6)