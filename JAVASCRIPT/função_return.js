// Que calcula a distância entre seu endereço e o local onde está no momento.
function distância (a, b){
    let ponto_exato = b - a
    return ponto_exato
}
console.log (distância(1000, 300))

// Que calcula a média e a soma de 5 notas.
function notas (nota1, nota2, nota3, nota4, nota5){
    let soma = nota1 + nota2 + nota3 + nota4 + nota5
    let media = 5/soma
    return soma, media
    
}
console.log(notas(7,4,5,9,3))

// Que calcula a área de um círculo.
function area (c){
    const calculo = (c*c)* 3.14
    return calculo
}
console.log(area(5))

// Que peça sua data de nascimento (ano) e calcule e imprima quantos anos você terá
function data (x){
    let calculo1 = 2025 - x
    return (`você terá ${calculo1} anos em 2025 KKKKKKKKKKKKK`)
}
console.log(data(2005))