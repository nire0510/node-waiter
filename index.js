/**
 * Returns a promise which resolves after a given time
 * @param {number} time Time to wait in milliseconds
 * @returns {Promise} Promise
 */
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

/**
 * Returns a promise which resolves after a given condition is met
 * @param {function} doWhat - Function which returns a promise to run as long as condition yet to be met
 * @param {function} untilWhen - Function to run on order to check if condition is met
 * @param {number} [max] - Maximum number of iterations before resolving
 * @returns {object} The result of doWhat function
 */
async function waitUntil(doWhat, untilWhen, max) {
  let counter = 0;
  let response;
  let shouldContinue;

  while ((!max || counter < max) && !shouldContinue) {
    response = await doWhat();
    shouldContinue = untilWhen(response);
    counter++;
  }

  return response;
}

module.exports = {
  wait,
  waitUntil,
};
