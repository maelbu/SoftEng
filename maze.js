
var maxCols = 6;
var maxRows = 6;

function CreateGrid() {
var innerHTMLString = "";
innerHTMLString = '<table>';
for (var theRow = 1; theRow <= maxRows; theRow++) {
innerHTMLString += '<tr>';
for (var theCol = 1; theCol <= maxCols; theCol++) {
innerHTMLString += '<td id=\"r';
innerHTMLString += theRow;
innerHTMLString += 'c';
innerHTMLString += theCol;
innerHTMLString += '\"></td>';
}
innerHTMLString += '</tr>';
}
innerHTMLString += '</table>';
$('#maze-grid').html(innerHTMLString);
}
