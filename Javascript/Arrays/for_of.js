// um loop bem mais complicado

const arr = [1,2,3]
const obj = {
    nome: "maria",
    idade: "28",
    email: "maria@server.com"
}

for (let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}


// for of agora é bem mais simples e da o mesmo resultado


for (n of arr){
    console.log(n)
}