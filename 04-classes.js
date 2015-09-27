/**
 * 4. Classes
 *
 * A new, modern and intuitive way for classes declaration.
 * Much more beautiful than classic prototyping manipulations, but it's basicaly the same thing.
 *
 * /!\ Don't fool yourself: JavaScript is not intended to become Java.
 * This new feature provides ONLY syntactic improvements:
 * >> Prototypes are used internally.
 */

'use strict'
var equals = require('assert').deepStrictEqual

class Entity {

  constructor(x, y) {
    x = x || 0
    y = y || 0
    this.life = 100
    this.position = { x, y } // shorthand that means "x:x, y:y"
  }

  // Method
  kill() {
    this.life = 0
  }

  // Override default behavior
  toString() {
    return 'Entity'
  }

  // Custom getters/setters
  get x ()  { return this.position.x }
  set x (x) { this.position.x = x    }

  get y ()  { return this.position.y }
  set y (y) { this.position.y = y    }

}

class Human extends Entity {

  constructor(x, y) {
    super(x, y)
    this.life = 200
    this.gender = Human.getDefaultGender()
  }

  toString() {
    return super.toString() + ' ' + 'Human'
  }

  // Support for static methods
  static getDefaultGender() {
    return 'f'
  }

}

// Support for static attributes
Human.staticAttribute = 'value'

let a = new Entity()
equals(a.position, { x : 0, y : 0 })
equals(a.x, 0)
equals(a.y, 0)
equals(a.life, 100)
equals(a.toString(), 'Entity')

let b = new Human(1, 2)
equals(b.position, { x : 1, y : 2 })
equals(b.x, 1)
equals(b.y, 2)
equals(b.gender, 'f')
equals(b.life, 200)
equals(b.toString(), 'Entity Human')

b.kill()
b.x  = -2
b.y += 5
equals(b.life, 0)
equals(b.position, { x : -2, y : 7 })
