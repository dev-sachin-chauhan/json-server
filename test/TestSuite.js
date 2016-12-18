module.exports = {
	setUp: function(){
		console.log("setup phase");
	},
	tests: {
		test_function1: function(){	
		console.log("function 1");
		},
		test_function2: function(){
		console.log("function 2");
		}
	},
	tearDown: function(){
		console.log("teardown phase");
	}
}
