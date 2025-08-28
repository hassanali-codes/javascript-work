// Task 16
// Async await >> promise chaining >> callback hell
// -----------Async Await------------------
// Async-Await are two keywords that is used to make Asyncrounous programming simpler
// async function always returns a promise
// await is used to wait for a promise to be resolved

async function hello() {
    console.log("hello")
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("weather api called")
        resolve(200)  //200 repreesents a successful api call
        }, 2000)
    })
}
async function getWeather() {
    await api(); // 1st call
    await api(); // 2nd call
    await api(); // 3rd call
    console.log("weather data received")
}

getWeather();

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
        }, 2000);
    })
 }

 // Async-await
async function fetchData() {
    console.log("fetching data 1...")
    await getData(1);
    console.log("fetching data 2...")
    await getData(2);
    console.log("fetching data 3...")
    await getData(3);
    console.log("fetching data 4...")
    await getData(4)
    console.log("all data fetched")
}

fetchData();

// error handling
async function getData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

// real world usage with fetch api
async function loadUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json(); // convert response into JS object
    console.log("Users:", users);
  } catch (err) {
    console.log("Failed to fetch users:", err);
  }
}

loadUsers();























