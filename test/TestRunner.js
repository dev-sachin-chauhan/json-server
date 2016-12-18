
var testsuite = require('./TestSuite');
var tests = Object.keys(testsuite.tests);
console.log("Number of tests: " + tests.length);
for(var i=0; i< tests.length; i++){
	testsuite.setUp();
	testsuite.tests[tests[i]]();
	testsuite.tearDown();
}
