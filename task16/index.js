// Task 16
// ------------Leet Code style-----------------
// Implement a function that pauses execution for n milliseconds.
function sleep(mili) {
  return new Promise(res => setTimeout(res, mili));
}

async function demo() {
  console.log("Start");

  await sleep(2000); // wait 2 seconds

  console.log("End after 2 seconds");
}

demo();

// Retry Promise Write a function that retries a failing Promise 3 times before throwing an error.
function asyncfun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly fail or succeed
      if (Math.random() > 0.5) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

async function retryPromise(fn, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt}...`);
      let result = await fn();
      return result; // success → stop retrying
    } catch (error) {
      console.log(error);
      if (attempt === retries) {
        throw new Error("All retries failed");
      }
    }
  }
}

retryPromise(asyncfun2, 3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));





















