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
export declare function deadline<T>(promise: Promise<T>, milliseconds: number): Promise<T>;
/**
 * The error that is returned when the deadline is reached.
 *
 * @export
 * @class DeadlineError
 * @property {string} message - The number of milliseconds configured for the deadline.
 * @extends {Error}
 */
export declare class DeadlineError extends Error {
    constructor(message: string);
}
