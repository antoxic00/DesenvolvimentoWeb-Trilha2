// Função para somar dois valores
function calcular(n1,n2){
    console.log(n1+n2)
}
calcular(10,10)

//função para calcular a divisão de dois numeros
function calcular1(x,y){
    console.log(x/y)
}
calcular1(20,5)
// Função para calcular a area de triangulo
function calcular2(b,h){
    console.log((b*h)/2)
}
calcular2(50,30)
// Função para exibir mensagem de erro
function idade(i){
    if (i < 18){
        console.log(` ${i} não é válido `)
    }else if (i > 18){
        console.log(`${i} é válido `)
}
}
idade(19)

// Função para tranformar metros em centimetros
function altura(a){
    console.log(a*100)
}
altura(1,76)


// Função que mostre sua idade em anos, meses e depois em dias.
function idade(n){

    console.log(`sua idade é ${n} anos`)
    console.log(`${n*12} meses `)
    console.log(`${n*365} dias`)
}
idade(78)

// Função que mostre o tamanho do nome do usuário
function tamanho(t){
    console.log(t.length)
}
tamanho("antonio")