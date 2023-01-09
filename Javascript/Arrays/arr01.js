const arr = [1, 5, 10, "ola", true]
let sonumeros = arr.some( function(el){
    return typeof el === "number" && el > 20

})

let arr1 = arr.filter(function(el, i, _arr){
   
    return typeof el === "number"
})

arr.forEach(function(el, i, _arr){
    console.log(i, ": ", el)
})

arr1 = arr1.map (function(el, i, _arr){
    return el * el
})




console.log(arr)
console.log(arr1)




// Map modifica a arr original quando vou usar isso?

//forEach é uma bosta creio que nucna vou usar mas faz uma interação e pode ate retornar alguma coisa


// .filter    mais ou menos eu nao sei oq eu fiz mas entendi que tipo: dentro da arr1 vai ser selecionado atraves de typeof el(elementos da arr) não muda a arr original e retorna na arr1 o que eu selecionar dentro da function

// arr.every se todas são do mesmo typeof

// arr.some se alguma variavel dentro da array for typeof ele volta true