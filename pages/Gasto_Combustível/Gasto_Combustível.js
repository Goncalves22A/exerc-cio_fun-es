
function  gastoCombustível(tempoGasto, velocidadeMedia){
  let distancia =  tempoGasto * velocidadeMedia 
  let litros = 12
   return distancia/ litros
}

litros1 = gastoCombustível(10, 85)
litros2 = gastoCombustível(2, 92)
litros3 = gastoCombustível(22, 67)

console.log(`quantidade de litros necessária é :${litros1.toFixed(3)}`)
console.log(`quantidade de litros necessária é :${litros2.toFixed(3)}`)
console.log(`quantidade de litros necessária é :${litros3.toFixed(3)}`)