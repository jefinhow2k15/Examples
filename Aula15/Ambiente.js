let num = [2,1,4,5,7]
//let pos = 0
num.push(8)
num.sort()
/*for(pos = 0; pos < num.length ; pos++){
    console.log(`posição ${pos} elemento ${num[pos]}`)
}*/

//Estrutura FOR IN, só funciona para array e objects

/*for(pos in num){
    console.log(`Posição ${pos} é ${num[pos]}`)
}*/

let pos = num.indexOf(5)

if(pos == -1){
    console.log(`Numero invalido`)
}else{
console.log(`o numero está na posição ${pos}`) 
}