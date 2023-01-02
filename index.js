let number = 50;
for(let i = 1; i<=number; i++){
    let table = []
    for(let j =1; j<=10; j++){
        table.push(i*j)
    }
    console.log(table.join(' '));
}