// code your solution here

function saturdayFun(fun='roller-skate'){
    return `This Saturday, I want to ${fun}`;
}

saturdayFun()

function mondayWork(task = 'go to the office') {
    return`This Monday, I will ${task}`;
}

mondayWork()

function wrapAdjective (msg = 'special'){
    console.log(`You are ${msg}`);
}

function wrapAdjective(wraps) {
    if (wraps==="*") {
        return (function (){
            return `You are ${wraps}a hard worker${wraps}!`
        })
    }
    else if (wraps==="||") {
        return (function (){
            return `You are ${wraps}a dedicated programmer${wraps}!`
        })

    }
}   