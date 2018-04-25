# FSXCL - The NodeJS Cross Compatibility Library for Windows Scripting Host for text processing

## What is this?

The two files fs.js and fsxcl.js provide a cross compatibility layer between NodeJS and the Windows Scripting Host.

It allows one to quickly create text processing scripts in JavaScript to replace utilities such as sed, awk and perl.

## Why do I need this?
It saves you from having to learn many different tools and syntaxes.  Just remember your string functions in JavaScript and you will be ready to process any text file.

## How do I use the libary?
Simply add the following lines in the beginning of your scripts:

```
require = typeof (require) === 'function' ? require : function (file) {
  var fh = (new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(file + '.js', 1);
  var content = fh.ReadAll(); fh.close(); eval(content); return fs;
}
require('./fsxcl');
```
Then write JavaScript code to read and write files.  In windows you can run these script files by simply double clicking on them - It will automatically open up a console window and run the script using the cscript command.


## What functions can I use?
The fs.js file replicates the following functions from the built-in NodeJS module:
```
fs.openSync
fs.readFileSync
fs.readSync
fs.writeSync
fs.closeSync
fs.existsSync
fs.mkdirSync
```
the fsxcl library provides the following global functions:
```
ReadInput - read a line of input from the console
ReadLine - read a line from a file opened with fs.openSync
SysCommand - run a system command and return output in a string
MakeFullPath - create a folder and any parent folders required in the path
```

You can run the example files using either the the NodeJS engine or Windows Scripting host like this:
```
node example3.js
```
OR
```
cscript /nologo example3.js
```
Both should produce the same output
