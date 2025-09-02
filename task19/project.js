//------------------MINI PROJECT😃--------------------
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function fetchUser(){
    try {
        loading.innerText = "loading...."
        error.innerText = "";
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()
    loading.innerText = "";
    console.log(posts)
    renderUser(posts)

    }
    catch (error) {
        loading.innerText = "";
        error.innerText = "Something went wrong!";
        console.log("Error fetching daya: ", error)
    }
}
function renderUser(user){
    let ul = document.getElementById("userList")
    ul.innerText = ""
    user.forEach(element => {
        let li = document.createElement("li")
        li.innerText = `${element.name} - ${element.email} - ${element.username}` 
        ul.appendChild(li)                               
    });
}

fetchUser()                            

