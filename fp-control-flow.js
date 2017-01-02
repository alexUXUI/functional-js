/**
 * The alternator can be used to build in simple conditional logic.
 * When you pass two functions, if the first function resolves, it will
 * return func one. If the first func fails, then the
 * alternator func will return the second func.
 */

const alternator = (fn1, fn2) => (val) => fn1(val) || fn2(val)

/**
 * Func stubs to simulate return values
 *
 * @param {null}
 * @return {boolean} || {null}
 */

const returnNull  = () => null,
      returnTrue  = () => true,
      returnFalse = () => false

/**
 * By passing 'unsafe' func(s) to Alternator func, alternator can dictate
 * the course of the program, depending on which function resolves.
 * If a function has an error or returns null, it is effectively handled.
 *
 * @param {function} fn1
 * @param {function} fn2
 * @return {function}
 */

const equalsTrue = alternator(returnTrue, returnNull)(), // true
      equalsNull = alternator(returnFalse, returnNull)(), // null
      equalsFalse = alternator(returnFalse, returnFalse)() // false

console.log(equalsTrue, equalsFalse, equalsNull);
