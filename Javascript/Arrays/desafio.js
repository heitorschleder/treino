function sum(){
    //const numbers = Array.from(arguments)
    const numbers = [...arguments]
    console.log(numbers)
    return numbers.reduce( function(sum, atual){ 
        return sum + atual }, 0)
}
function avarege(){
    return sum(...arguments) / arguments.length
}
let soma = sum (1,2,3,4,5)
let media = avarege(1,2,3,4,5)
console.log (soma)
console.log (media)


// não consegui desenvolver isso aqui não