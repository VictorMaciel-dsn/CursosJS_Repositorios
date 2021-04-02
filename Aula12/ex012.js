var idade = 68
console.log('Você tem ' + idade + ' Anos!')

if(idade < 16){
    console.log('Não vota!')
}else if(idade < 18 || idade > 65){
    console.log('Seu voto é opcional!')
}else if(idade >= 18){
    console.log('Seu voto é obrigatório!')
}