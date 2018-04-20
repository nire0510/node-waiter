# node-waiter
helper functions which make your code wait

## Installation
npm i node-waiter

## Usage
* `wait(time)` - Returns a promise which resolves after a given time
```
const waiter = require('node-waiter');

waiter
  .wait(5000)
  .then(() => console.log('I\'ve been waiting for 5 seconds!'));
```

* `waitUntil(doWhat, untilWhen, max)` - Returns a promise which resolves after a given condition is met
```
const waiter = require('node-waiter');

/**
 * Example of an async function which randomally returns true
 */
function doWhat() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(Math.random() > 0.8);
    }, 1000);
  });
}

/**
 * Checks whether a condition is met, in order to tell waitUntil to proceed
 * @param {object} data - The response from the business function above
 */
function untilWhen(data) {
  return data === true;
}

waiter
  .waitUntil(doWhat, untilWhen)
  .then(isTrue => console.log('Condition finally met!'));
```