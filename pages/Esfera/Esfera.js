function esfera(R){
   return  (4.0/3) * 3.14159 * R*R*R
}

let volume1 = esfera(3)
let volume2 = esfera(15)
let volume3 = esfera(1523)

console.log(`volume 1 = ${volume1.toFixed(3)}`)
console.log(`volume 2 = ${volume2.toFixed(3)}`)
console.log(`volume 3 = ${volume3.toFixed(3)}`)
