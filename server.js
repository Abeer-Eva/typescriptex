"use strict";
const object = require('./module.js')
const getNumber = object.getNumber

console.log('server.js')

let x = getNumber()
console.log(x)