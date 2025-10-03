// ---------------Task 27----------------
async function Dashboard(){
try{
    const [user,tds] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/todos')
    ]);

    const users = await user.json()
    const todos = await tds.json()
    // console.log("Users: ", users);

    highestCount = 0;
    topUser = ""
    for(let u of users){
        const userTodos = todos.filter(td => td.userId === u.id)
        console.log(`User: ${u.name} ${u.email} has ${userTodos.length} todos`)
        // console.log(userTodos)

        let completeCount = userTodos.filter(td => td.completed).length
        let incompleteCount = userTodos.filter(td => !td.completed).length
        if(completeCount > incompleteCount){
            console.log("users have more completed tasks")
        }
        else{
            console.log("users have more incompleted tasks or equal")
        }
        if (completeCount > highestCount) {
        highestCount = completeCount;
        topUser = u.name;
      }
    }

     console.log(`\nUser with highest completed todos: ${topUser} (${highestCount} completed)`);    
    
}catch(err){
    console.log("Error: ", err)
}
}
Dashboard()


// time complexity is O(m . n) because for each n user i run todos.filter which scans all m todos
//space complexity is O(1) because no extra space is used except few variables