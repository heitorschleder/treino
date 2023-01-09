let arr = [4, 5, 10, 20, 35, 4 , 5]
console.log(arr.lastIndexOf(5))

console.log(arr.includes(5))

console.log(arr.find(function(el){
    return el > 10
}))
console.log(arr.findIndex(function(el){
    return el > 10
}))









// indexOf retorna a posição do primeiro elemento que tu manda buscar (se usar o indeof e o valor não estiver dentro da arr ele mostra -1)

// lastindexOf é o inverso

//include mostra um valor boleano (v ou f)

// find procura o primeiro elemento que tenha o parametro colocado na function

// findIndex mostra a posição em que o primeiro elemento que tenha o parametro colocado na function