/**
 * This module allows for the creation of promises with deadlines.
 * The intent is to avoid having async operations that can hang indefinitely.
 *  
 * @module promise-deadline
 */

/**
 * Wraps a promise with a deadline.
 * If the promise is not completed by the deadline, it will be rejected
 * with a DeadlineError.
 *
 * @export
 * @template T
 * @param {Promise<T>} promise
 * @param {number} milliseconds
 * @returns {Promise<T>}
 */
export function deadline<T>(promise: Promise<T>, milliseconds: number): Promise<T> {
  return new Promise(function(resolve, reject) {
    const id = setTimeout(function() {
      reject(new DeadlineError(milliseconds.toString()))
    }, milliseconds)

    promise.then(function(value) {
      clearTimeout(id)
      resolve(value)
    }, function(reason) {
      clearTimeout(id)
      reject(reason)
    })
  })
}

/**
 * The error that is returned when the deadline is reached.
 *
 * @export
 * @class DeadlineError
 * @property {string} message - The number of milliseconds configured for the deadline.
 * @extends {Error}
 */
export class DeadlineError extends Error {
  constructor(message: string) {
    super(message)
    if ((Error as any).captureStackTrace) (Error as any).captureStackTrace(this, this.constructor)
    this.name = 'DeadlineError'
    this.message = message
  }
}