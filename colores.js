const colors=require('colors')

const { arrayColores, arrayColores2 } = require('./arraysData')


const mostarColores = (...colores) => {
    colores.forEach((item) => {
        console.log(item.red)
    })
}

const mostarColores1 = () => {
    arrayColores.forEach((item) => {
        console.log(item)
    })
}
const mostarColores2 = () => {
    arrayColores2.forEach((item) => {
        console.log(item)
    })
}

console.log('desde colores')
module.exports={
    mostarColores1,
    mostarColores2,
    mostarColores
}