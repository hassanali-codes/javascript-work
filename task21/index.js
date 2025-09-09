// --------------Task 21-----------------
// ----------Leet Code Style Problem---------
function validParanthesis(str){
    let stack = []
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for(let char of str){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }
        else{
            if(stack.length === 0){
                return false
            }
            let last = stack.pop()
            if(pairs[last] !== char){     
                return false
            }
        }
    }
    return stack.length === 0;
}

console.log(validParanthesis("{([])}"))
console.log(validParanthesis("()[]{}")); 
console.log(validParanthesis("([)]"));    
console.log(validParanthesis("{[]}"));   


















