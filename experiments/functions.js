const Iterator = require('../Iterator.js')

var rectify  = x=>x>0?x:0
var softplus = x=>Math.log(1+Math.exp(x))

var a = [5,-1,-45,2,34]

console.log(Iterator(a).map(rectify).toArray())
console.log(Iterator(a).map(softplus).toArray())
console.log(Iterator.random().take(1000).groupBy(i=>i>0.5, 'count'))

function prodN(){
    return Array.from(arguments).reduce((a,b)=>a*b, 1)
}

var factorials = ()=>Iter.range().skip(1).cumulate(prodN)

var factorial = n=>Iter.range(1,n+1).reduce(prodN)