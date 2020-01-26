const stringytime = require('./lib/stringytime');
const {equal} = require('assert');


try {
  // 2 seconds is equal to 2000 milliseconds
  equal(stringytime.toMilliseconds('2s'), 2000);
  // 3 minutes is equal to 60000 milliseconds
  equal(stringytime.toMilliseconds('3m'), 180000);
} catch (e) {
  console.log(
      `test has failed (error: following assessment is false : ${e.message})`);
  process.exit(1);
}

console.log('tests successful');
process.exit(0);