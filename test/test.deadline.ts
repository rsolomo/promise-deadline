import {deadline, DeadlineError} from '../index'

declare var process: any

process.on('unhandledRejection', (err: any) => {
  throw err
})

;(function shouldResolveWithMatchingValues() {
  const ref1 = {}
  deadline(Promise.resolve(ref1), 500).then((ref2) => {
    if (ref1 !== ref2) throw new Error('values should match')
  })
}())

;(function shouldRejectWithDeadlineError() {
  const delayed = new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  deadline(delayed, 500).then(() => {
    throw new Error('should be a rejection')
  }, (reason) => {
    if (!(reason instanceof DeadlineError))
      throw new Error('should be a DeadlineError')
  })
}())
