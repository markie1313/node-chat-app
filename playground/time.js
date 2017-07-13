var moment = require('moment');

// getMonth() uses 0 base
// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
// console.log(date.getMonth());


// var date = moment();
// date.add(13, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 6:05 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var dDate = moment(createdAt);
console.log(dDate.format('h:mm a'));
