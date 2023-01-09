let arr = [1,3,5,7,9]

let teste = arr.push(11, 13, true, "ola mundo")

console.log(teste)
console.log(arr)

let ultimoitem = arr.pop()
console.log(ultimoitem)
console.log(arr)

let primeiroitem = arr.shift()
console.log(primeiroitem)
console.log(arr)

teste = arr.unshift(4,6,3)
console.log(teste)
console.log(arr)

let arr2 = arr.slice(2, 4)
console.log(arr2)

let arr3 = arr.splice(2 , 4, "ola mundo")
console.log(arr)
console.log(arr3)



// splice sempre retorna os elementos excluidos (sempre modifica o arr original)

// slice seleciona a partir de uma posição dentro da array e moostra a partir dela, se tu botar um limite ele mostra dentro do limite pedido

// unshift adiciona mais coisas na arr original só que nas primeiras posições

// shift exclui o primeiroitem mexendo da array

// pop exclui o ultimoitem mexendo na array original

// .push adiciona mais coisas na arr original nas últimas posições