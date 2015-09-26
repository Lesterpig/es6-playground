/**
 * 2. Arrow functions
 *
 * A shortcut for function declarations
 * /!\ You will not be able to use `call`, `bind` and `apply` with these. See below.
 */

'use strict'
var equals = require('assert').deepStrictEqual

// Intuitive return form (something like OCaml)
{
  let addOne = i => i + 1
  let add    = (i,j) => i + j

  equals(addOne(0), 1)
  equals(add(1,2), 3)
}

// Very useful form for callbacks
{
  let array = [0, 1, 2]
  let arrayDouble = array.map(a => 2*a)
  
  equals(arrayDouble, [0, 2, 4])
  
  let result = {}
  let sum    = 0
  arrayDouble.forEach( (e, i) => {
    result[e] = i
    sum += e
  })

  equals(result, {
    0 : 0 
  , 2 : 1
  , 4 : 2
  })
  equals(sum, 6)
}

// Keeps `this` context in objects
{
  let Test = function(data) {

    this.sum = 0
    this.data = data
  
    // ES6
    this.computeSum = function() {
      this.sum = 0
      this.data.forEach(e => {
        this.sum += e
      })
    }

    // ES5
    this.computeSum2 = function() {
      this.sum = 0
      this.data.forEach(function(e) {
        if(this)
          this.sum += e // never executed, because `this` is undefined
      })
    }

  }

  let a = new Test([1,2,3])
  a.computeSum()
  equals(a.sum, 6) // works
  a.computeSum2()
  equals(a.sum, 0) // doesn't work
}
