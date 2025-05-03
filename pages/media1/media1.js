function media (nota1, nota2){
    return (nota1 * 3.5 + nota2 * 7.5) /11
}

let media1 =  media(5, 7.1)
let media2 =  media(0, 7.1)
let media3 =  media(10, 10)

console.log(`
    media1 = ${media1.toFixed(5)}
    media2 = ${media2.toFixed(5)}
    media3 = ${media3.toFixed(5)}
    `)