/**
 * 3. Arguments
 *
 * Calling function with a variable number of arguments is now stronger and safer.
 * !! Note: these features are not yet implemented. You can simulate these with babel:
 *
 * Install.. : npm install -g babel
 * Usage.... : babel 03-args.js | node
 */

'use strict'
var equals = require('assert').deepStrictEqual

/* Defaults
 *
 * Works in a very intuitive way.
 * Only trailing arguments are allowed to have defaults values.
 */

{

  let fn = function (x = 0, y = [], z = function() {}) {
    return [x, y, z()]
  }

  let a = fn()
  let b = fn(1, 2)
  let c = fn(undefined, null)
  let d = fn(false, 0, function() { return 1 })

  equals(a, [0, [], undefined])
  equals(b, [1, 2, undefined])
  equals(c, [0, null, undefined]) // Beware, null is considered as a valid value
  equals(d, [false, 0, 1])

}

/* Rest
 *
 * Another way to deals with n arguments, without the dangerous `arguments` variable.
 * Only available for the last argument.
 */

{

  let makeArray = function (...elements) {
    return elements
  }

  equals(makeArray(0, 1), [0, 1])
  equals(makeArray(), [])

}

/* Spread
 *
 * Useful tool to explode an array in other arrays or functions
 */

{

  let fn = function(x, y) {
    return y
  }

  let a = [0, 1, 2]
  equals(fn(...a), 1) // Spread into a function

  let b = [-2, -1, ...a, 3]
  a = [-4, -5, -6] // Data is copied, we can modify that freely
  equals(b, [-2, -1, 0, 1, 2, 3]) // Spread into an array

  let c = [{ foo: 'bar' }]
  let d = [...c]
  d[0].foo = 'foo'
  equals(c, [{ foo: 'foo' }]) // Objects are not copied, as usual
  equals(d, [{ foo: 'foo' }])

}
