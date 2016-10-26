<a name="module_promise-deadline"></a>

## promise-deadline
This module allows for the creation of promises with deadlines.
The intent is to avoid having async operations that can hang indefinetly.


* [promise-deadline](#module_promise-deadline)
    * [~DeadlineError](#module_promise-deadline..DeadlineError) ⇐ <code>Error</code>
        * [new DeadlineError()](#new_module_promise-deadline..DeadlineError_new)
    * [~deadline(promise, milliseconds)](#module_promise-deadline..deadline) ⇒ <code>Promise.&lt;T&gt;</code>

<a name="module_promise-deadline..DeadlineError"></a>

### promise-deadline~DeadlineError ⇐ <code>Error</code>
**Kind**: inner class of <code>[promise-deadline](#module_promise-deadline)</code>  
**Extends:** <code>Error</code>  
**Export**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The number of milliseconds configured for the deadline. |

<a name="new_module_promise-deadline..DeadlineError_new"></a>

#### new DeadlineError()
The error that is returned when the deadline is reached.

<a name="module_promise-deadline..deadline"></a>

### promise-deadline~deadline(promise, milliseconds) ⇒ <code>Promise.&lt;T&gt;</code>
Wraps a promise with a deadline.
If the promise is not completed by the deadline, it will be rejected
with a DeadlineError.

**Kind**: inner method of <code>[promise-deadline](#module_promise-deadline)</code>  
**Export**:   
**Template**: T  

| Param | Type |
| --- | --- |
| promise | <code>Promise.&lt;T&gt;</code> | 
| milliseconds | <code>number</code> | 

