# promise-deadline

## Usage

### .deadline(promise, milliseconds)

Wraps a promise with a deadline.
If the promise is not completed by the deadline, it will be rejected
with a DeadlineError.

- param {Promise<T>} promise
- param {number} milliseconds
- returns {Promise<T>}
