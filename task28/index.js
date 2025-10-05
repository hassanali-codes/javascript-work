// ---------- Task 28 ----------

async function socialDashboard() {
    try {
        const [postsResponse, commentResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/comments')
        ])

        const posts = await postsResponse.json();
        const comments = await commentResponse.json();
        const postCommentCount = posts.map(post => {
            const commentCount = comments.filter(comment => comment.postId === post.id)
            return { ...post, commentCount: commentCount.length }
        })
        const sortedPosts = postCommentCount.sort((a, b) => b.commentCount - a.commentCount)
        const top5Posts = sortedPosts.slice(0, 5);
        console.log("--- Top 5 Posts with Most Comments ---");
        top5Posts.forEach(post => {
            console.log(`${post.title} -> ${post.commentCount} comments`);
        });
        const userTotals = {};
        for(let post of postCommentCount){
            if (userTotals[post.userId] === undefined) {
                userTotals[post.userId] = 0;
            }
            userTotals[post.userId] += post.commentCount;
        }
        const userPostCounts = {}
        for(let post of postCommentCount){
            if(!(userPostCounts[post.userId])){
                userPostCounts[post.userId] = 0;
            }
            userPostCounts[post.userId] += 1;
        }
        console.log("\n--- Average Comments per Post by User ---");
        for (let userId in userTotals) {
            const average = userTotals[userId] / userPostCounts[userId]
            console.log(`User ${userId} -> ${average.toFixed(2)} average comments per post`);
        }
        for(let post of postCommentCount){
            if(post.commentCount === 0){
                console.log(`\nPost with No Comments:\nTitle: ${post.title}\nBody: ${post.body}`);
            }
        }
    }
    catch (err) {
        console.log("Error: ", err)
    }
}

socialDashboard();