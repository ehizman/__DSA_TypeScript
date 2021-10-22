for (let i = 0; i < 8; i++) {
    if (i % 2 !== 0){
        console.log("# ".repeat(4));
    }
    else{
        console.log(" #".repeat(4));
    }
}

let  minus = function(a: number, b?: number){
    if (b === undefined){
        return -a;
    }
    else{
        return a-b;
    }
}


console.log(minus(5));