require = typeof (require) === 'function' ? require : function (file) {
  var fh = (new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(file + '.js', 1);
  var content = fh.ReadAll(); fh.close(); eval(content); return fs;
}
require('./fsxcl');


var TEST_FOLDER = 'my_folder';
var TEST_FILE = 'testdata.txt';


// *** Create a text file
var fdOut = fs.openSync(TEST_FILE, 'w');
for (var j = 0; j < 100; j++) {
  fs.writeSync(fdOut, 'This is line number ' + j + '\n');
};
fs.closeSync(fdOut);


// *** Read a text file
if (fs.existsSync(TEST_FILE)) {
  fdIn = fs.openSync(TEST_FILE, 'r');
  var i = 0
  ReadLine(fs, fdIn, function (text) {
    console.log((++i) + ' ' + text);
    if (i == 10) return true;
  });
  fs.closeSync(fdIn);
};

if (!fs.existsSync(TEST_FOLDER)) {
  fs.mkdirSync(TEST_FOLDER);
};

// *** Make a folder
MakeFullPath(fs, "this/is/a/folder");

// *** Read a whole file into a string
var tst = fs.readFileSync(TEST_FILE, 'utf-8');
// console.log(tst);

// *** Wait for user input
ReadInput(function (text) { });
