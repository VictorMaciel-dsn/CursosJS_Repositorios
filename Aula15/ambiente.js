let num = [1, 2, 3, 4, 5]

num.sort()
num.push(10)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if(pos == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`O valor 2 está na posição ${pos}`)
}

