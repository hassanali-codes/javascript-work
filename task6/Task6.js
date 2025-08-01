//required output
// Ali scored 78 and got grade C  
// Sara scored 92 and got grade A  
// Zaid scored 60 and got grade D  
// Hassan scored 55 and got grade F  

// Total Passed Students: 3  
// Total Failed Students: 1



student_name = ["Ali", "Hassan", "Bilal", "Usman", "Hammad", "haider"];
marks = [90, 80, 70, 48, 50, 65];
passed = 0;
failed = 0;
grade = ""

for(let i = 0; i < student_name.length; i++){
     if(marks[i] >= 90){
        //  console.log("A grade");
        grade = "A grade";
        passed += 1;
     }
     else if(marks[i] >= 80){         
        //  console.log("B grade");
        grade = "B grade";
        passed += 1;
     }
     else if(marks[i] >= 70){
        //  console.log("C grade");
        grade = "C grade";
        passed += 1;

     }
     else if(marks[i] >= 60){
        //  console.log("D grade");
        grade = "D grade";
        passed += 1;

     }
     else{
        //  console.log("F grade");
        grade = "F grade";
        failed += 1;
     }
     console.log(`${student_name[i]} scored ${marks[i]} and got ${grade}`);
}

console.log(`Total passed: ${passed}`);
console.log(`Total failed: ${failed}`);

