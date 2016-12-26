'use strict'

/**
 * transformData is a composer func because it is composed of funcs
 *
 * way <-- this <-- flows <-- data
 *
 * in the signature of the composer,
 * which takes functions as args
 */

const data = [1, 2, 3, 4, 5, 6]

const printData = data => console.log(data)

const operateOnData = data => new Promise((resolve, reject) =>
  resolve(data.map(i => i += i).filter(i => i > 10)))

const transformData = (printData, operateOnData, data) =>
  operateOnData(data).then(data => printData(data))

transformData(printData, operateOnData, data)
