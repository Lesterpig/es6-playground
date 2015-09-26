/**
 * 1. Variables
 *
 * ES6 introduces new keywords for variables: const, let
 * They are useful to control scopes.
 *
 * Please note that they are only allowed in strict mode.
 */

'use strict'
var equals = require('assert').strictEqual

/* let
 *
 * Define a variable only in a block (and sub-blocks)
 */

var i = 1

if (true) {
  let i = 2
  let j = 3
  var k = 4
  equals(i, 2)
}

equals(i, 1)
// j is undefined here
equals(k, 4)

/* const
 *
 * Define a constant (read-only variable)
 */

const PI = Math.PI

equals(PI, Math.PI)

let err = false;
try {
  PI = 0
} catch(e) {
  err = true
}

equals(err, true)

/* blocks
 *
 * You can now build blocks without keywords
 */

let a = false
{
  let a = true
  equals(a, true)
}
equals(a, false)
