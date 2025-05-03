function Consumo (X, Y){
  return  X / Y
}

let consumo_médio1 = Consumo(500, 35)
let consumo_médio2 = Consumo(2254, 124.4)
let consumo_médio3 = Consumo( 4554, 464.6)

console.log(` consumo médio ${consumo_médio1.toFixed(3)}km/l`)
console.log(` consumo médio ${consumo_médio2.toFixed(3)}km/l`)
console.log(` consumo médio ${consumo_médio3.toFixed(3)}km/l`)