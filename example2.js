/*
  This sample script reads a sample tab separated CSV file with 500000 records
*/
require = typeof (require) === 'function' ? require : function (file) {
  var fh = (new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(file + '.js', 1);
  var content = fh.ReadAll(); fh.close(); eval(content); return fs;
}
require('./fsxcl');


var fileIn = fs.openSync('testdata.csv', 'r')
var count = 0;
ReadLine(fs, fileIn, function (line) {
  var fields = line.split('\t');
  if (fields[0] === 'Joe' && fields[2] === 'Captain') {
    console.log((++count) + ' ' + line);
  }
});

fs.closeSync(fileIn);
