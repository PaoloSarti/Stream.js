const Stream = require("../Stream.js")

function logisticMap(x0,r){
    return Stream.iterate(x0, e=>r*e*(1-x0))
}

const l = logisticMap(0.9,0.9)

console.log(l.takeWhile(e=>e>0.00001).toArray())
