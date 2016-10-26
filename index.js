/**
 * This module allows for the creation of promises with deadlines.
 * The intent is to avoid having async operations that can hang indefinitely.
 *
 * @module promise-deadline
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
function deadline(promise, milliseconds) {
    return new Promise(function (resolve, reject) {
        var id = setTimeout(function () {
            reject(new DeadlineError(milliseconds.toString()));
        }, milliseconds);
        promise.then(function (value) {
            clearTimeout(id);
            resolve(value);
        }, function (reason) {
            clearTimeout(id);
            reject(reason);
        });
    });
}
exports.deadline = deadline;
/**
 * The error that is returned when the deadline is reached.
 *
 * @export
 * @class DeadlineError
 * @property {string} message - The number of milliseconds configured for the deadline.
 * @extends {Error}
 */
var DeadlineError = (function (_super) {
    __extends(DeadlineError, _super);
    function DeadlineError(message) {
        _super.call(this, message);
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
        this.name = 'DeadlineError';
        this.message = message;
    }
    return DeadlineError;
}(Error));
exports.DeadlineError = DeadlineError;
//# sourceMappingURL=index.js.map