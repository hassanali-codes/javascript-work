// ---------------Task 27 (Updated with Feedback)----------------
async function Dashboard() {
  try {
    const [user, tds] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/todos')
    ]);

    const users = await user.json();
    const todos = await tds.json();

    // --- 1. Use single loop to build summary (Fix redundant filtering)
    const summary = {};

    for (let td of todos) {
      if (!summary[td.userId]) summary[td.userId] = { total: 0, complete: 0 };
      summary[td.userId].total++;
      if (td.completed) summary[td.userId].complete++;
    }

    // --- 2. Use proper variable declarations
    let highestCount = 0;
    let topUser = "";

    // --- 3. Improved output clarity
    for (let u of users) {
      const userData = summary[u.id] || { total: 0, complete: 0 };
      const completeCount = userData.complete;
      const incompleteCount = userData.total - completeCount;

      console.log(`\nSummary for ${u.name} (${u.email}):`);
      console.log(`Completed: ${completeCount}, Incomplete: ${incompleteCount}`);
      console.log(
        completeCount > incompleteCount
          ? "More Completed Tasks"
          : "More Incomplete/Equal Tasks"
      );

      if (completeCount > highestCount) {
        highestCount = completeCount;
        topUser = u.name;
      }
    }

    // --- 4. Edge case: no completed todos
    if (!topUser) {
      console.log("No completed todos found among users.");
    } else {
      console.log(`\nUser with highest completed todos: ${topUser} (${highestCount} completed)`);
    }
  } catch (err) {
    console.log("Error:", err);
  }
}

Dashboard();




// time complexity is O(m . n) because for each n user i run todos.filter which scans all m todos
//space complexity is O(1) because no extra space is used except few variables