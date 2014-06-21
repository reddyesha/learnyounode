var myModule = require('./mymodule'),
    directory = process.argv[2],
    fileExt = process.argv[3],
    callback = process.argv[4];

//var callback = console.log;
// var path = ../06_make_it_modular/

myModule(directory, fileExt, callback);