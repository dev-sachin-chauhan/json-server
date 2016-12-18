

var Interface = require('./interface');
var dataInterface = function(dataObject) {
    var checkData = new Interface('checkData',['listUsers','getUser','addUser','deleteUser']);

    Interface.ensureImplements(dataObject, checkData);

    return dataObject;
}

module.exports = dataInterface;
