// ----------------TASK 25----------------

console.log( "--------------------------------------")
console.log("             QUIZ GAME 🎮           ")
console.log( "--------------------------------------")

let total = 0
let report = []
const questions = [
    {
        id: 1,
        question : "How many bones are in human body(A,B,C,D)?", 
        options : ["a) 204", "b) 205", "c) 206", "d) 207"], 
        correctAns : "c"
    },
    {
        id: 2,
        question : "Which planet is known as the Red Planet(A,B,C,D)?",
        options : ["a) Jupiter", "b) Mars", "c) Venus", "d) Saturn"], 
        correctAns : "b"
    },   
    {
        id : 3,
        question : "Which programming language is known as the mother of all languages(A,B,C,D)?",
        options : ["a) C", "b) Python" , "c) Java", "d) Assembly"],
        correctAns : "a"
    },
    {
        id: 4,
        question : "What does HTTP stand for(A,B,C,D)?",
        options : ["a) Hyper Text Transfer Protocol", "b) High Transfer Text Protocol", "c) Hyper Tool Transfer Process", "d) Hyper Transfer Text Program"],
        correctAns : "a"
    }
] 

for(let i=0; i < questions.length; i++){
    console.log("---------------------------------------")
    console.log(questions[i].question)
    for(let j=0; j < questions[i].options.length; j++){
        console.log(questions[i].options[j])

    }
    console.log("\n")
    let answer = prompt("What is your answer").toLowerCase()
    if(answer === questions[i].correctAns){
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
        userAnswer: answer,
    })
}


console.log("------------------------------")    
console.log("            RESULT            ")
console.log("------------------------------")  

console.log("Total Score: ", total, "/", questions.length)

console.log("\n📋 Detailed Report:")
console.log(report)



