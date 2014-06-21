var fs = require('fs');

module.exports = function (directory, fileExt, callback) {
    fs.readdir(directory, function (err, files) {

        // handle error callback
        if (err) {
            return callback(err);
        }

        // create an empty array to keep track of files
        var fileList = [];

        // files is an array of the names of the files in the directory excluding '.' and '..'
        function logIt() {
            for (var i = 0; i < files.length; i++) {
                if (files[i].indexOf('.' + fileExt) >= 0) {
                    fileList.push(files[i]);
                    console.log(files[i])
                }
            }
            return fileList;
        };

        callback(null, logIt());
    });
};