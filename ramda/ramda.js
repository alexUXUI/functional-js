`use strict`

/**
 * @author Alex Bennett
 * @license MIT
 */

const R = require(`ramda`),
      log4js = require(`log4js`),
      logger = log4js.getLogger()

/**
 * Program 1) combines two arrays using R.zip
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 */

const arr1 = [1, 2, 3]
const arr2 = [`a`, `b`, `c`]
logger.debug(R.zip(arr1, arr2)) // -> [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]

/**
 * Program 2.A) func compostion using R.compose
 * way <- this <- flows <- data
 * @param {function} fn4
 * @param {function} fn3
 * @param {function} fn2
 * @param {function} fn1
 * @return {number}
 */

const // numbers decs
      a = 1,
      b = 2,
      c = 3,
      // function decs
      fn1 = a => a,
      fn2 = b => b,
      fn3 = c => c,
      fn4 = () => a + b + c

const sumThenSubtract = R.compose(fn4, fn3, fn2, fn1)
logger.debug(sumThenSubtract(a, b, c)) // -> 6

/**
 * Program 2.B) func compostion using R.pipe
 * data -> flows -> this -> way
 * like a unix program (e.g.: ls | grep 'src' | cowsay)
 * @param {function} fn1
 * @param {function} fn2
 * @param {function} fn3
 * @param {function} fn4
 * @return {number}
 */

const pipeTheValues = R.pipe(fn1, fn2, fn3, fn4)
logger.debug(pipeTheValues(a, b, c)) // -> 6
