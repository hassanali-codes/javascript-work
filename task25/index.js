// ----------------TASK 25----------------
// ----------------TASK 25----------------

console.log( "--------------------------------------")
console.log("             QUIZ GAME 🎮             ")
console.log( "--------------------------------------")

let total = 0
let report = []
const questions = [
    {
        id: 1,
        question : "How many bones are in human body?", 
        options : ["204", "205", "206", "207"], 
        correctAns : "206"
    },
    {
        id: 2,
        question : "Which planet is known as the Red Planet?",
        options : ["Jupiter", "Mars", "Venus", "Saturn"], 
        correctAns : "Mars"
    },   
    {
        id : 3,
        question : "Which programming language is known as the mother of all languages?",
        options : ["C", "Python" , "Java", "Assembly"],
        correctAns : "C"
    },
    {
        id: 4,
        question : "What does HTTP stand for?",
        options : [
            "Hyper Text Transfer Protocol", 
            "High Transfer Text Protocol", 
            "Hyper Tool Transfer Process", 
            "Hyper Transfer Text Program"
        ],
        correctAns : "Hyper Text Transfer Protocol"
    }
] 

for(let i=0; i < questions.length; i++){
    console.log("------------------------------")
    console.log(questions[i].question)
     console.log("a) " + questions[i].options[0])
    console.log("b) " + questions[i].options[1])
    console.log("c) " + questions[i].options[2])
    console.log("d) " + questions[i].options[3])
    console.log("\n")

    let answer;
    while(true){
        answer = prompt("What is your answer(a/b/c/d)").toLowerCase()
        if(['a','b','c','d'].includes(answer)){
            break 
        }
        else{
            console.log("⚠️Invalid option. please try again")
        }
    }
    const index = {a:0, b:1, c: 2, d:3}[answer]
    const selected = questions[i].options[index]   
    if(selected === questions[i].correctAns){
        console.log("Correct Answer✅")
        total += 1
    }
    else{
        console.log("Incorrect Answer❌")
    }
    report.push({
        id: questions[i].id,
        question: questions[i].question,
        options: questions[i].options,
        correctAnswer: questions[i].correctAns,
        userAnswer: selected,
    })
}


console.log("------------------------------")    
console.log("            RESULT            ")
console.log("------------------------------")  

console.log("Total Score: ", total, "/", questions.length)

console.log("\n📋 Detailed Report:")
console.log(report)


// ------------------------Leet Code Style Problem------------------------

let arr = [1,2,3,4,5,6,7]

function findIndex(arr, target){
    for(let i=0; i< arr.length; i++){
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i+1, j+1] 
            }
        }
    }
}

console.log(findIndex(arr, 13))
  



