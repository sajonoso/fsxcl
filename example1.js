/*
  This sample script generates a tab separated CSV file with 500000 records
*/
require = typeof (require) === 'function' ? require : function (file) {
  var fh = (new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(file + '.js', 1);
  var content = fh.ReadAll(); fh.close(); eval(content); return fs;
}
require('./fsxcl');


var FIRSTNAMES = ['John', 'Jane', 'Joe', 'Peter', 'Paul', 'Luke', 'Han', 'Flash', 'Leila', 'Lulu']
var LASTNAMES = ['Smith', 'Wong', 'Hamlet', 'Hamiton', 'Skywalker', 'Solo', 'Kirk', 'Doe', 'Gordon']
var JOBS = ['Jedi', 'Explorer', 'Knight', 'Captain', 'Doctor', 'Nurse', 'Officer', 'Judge']


function rand(min, max) { return ~~(Math.random() * (max - min) + min); }


var fileOut = fs.openSync('testdata.csv', 'w');
var firsName = '', lastName = '', job = '',
  lineData = 'firstName\tlastName\tjob\n';

for (var i = 0; i < 500000; i++) {
  firstName = FIRSTNAMES[rand(0, FIRSTNAMES.length - 1)];
  lastName = LASTNAMES[rand(0, LASTNAMES.length - 1)];
  job = JOBS[rand(0, JOBS.length - 1)];
  lineData += firstName + '\t' + lastName + '\t' + job;
  lineData += "\n";
}

fs.writeSync(fileOut, lineData);
fs.closeSync(fileOut);
