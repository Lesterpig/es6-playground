/**
 * 5. Destructuring
 *
 * Fast ways to set a lot of variables
 * !! Note: these features are not yet implemented. You can simulate these with babel:
 *
 * Install.. : npm install -g babel
 * Usage.... : babel 05-destructuring.js | node
 */

'use strict'
var equals = require('assert').deepStrictEqual

/* Array matching */
{
  let a = [1, 2, 3]
  let [b, c]     = a
  let [d,,e]     = a
  let [,,,f = 4] = a

  equals(c, 2)
  equals(d, 1)
  equals(e, 3)
  equals(f, 4)

  // Var inversion (not yet implemented in babel nor node)

  // [c, b] = [b, c]
  // equals(b, 2)
  // equals(c, 1)
}

/* Object matching */
{
  let o = { a: 1, b: 2, z: {foo: 'bar'} }

  let { a, b } = o
  equals(a, 1)
  equals(b, 2)

  let { a : aliasA, b : aliasB } = o
  equals(aliasA, 1)
  equals(aliasB, 2)

  let { d, c = 'default' } = o
  equals(c, 'default')
  equals(d, undefined)

  let { z : { foo }} = o
  equals(foo, 'bar')

  // Usage case: function returning several values

  let fn = () => { return { varA : 0, varB : true }}

  let { varA, varB } = fn()
  equals(varA, 0)
  equals(varB, true)
}
