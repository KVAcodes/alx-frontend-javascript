var student1 = { firstName: 'Victor', lastName: 'Kadiri', age: 21, location: 'Gbagada' };
var student1 = { firstName: 'Treasure', lastName: 'Okure', age: 21, location: 'UNILAG' };
var studentsList = [student1, student2];
function renderTable() {
    var table = document.createElement("table");
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        var firstNameCell = row.insertCell();
        firstNameCell.innerHTML = student.firstName;
        var locationCell = row.insertCell();
        locationCell.innerHTML = student.location;
    });
    document.body.appendChild(table);
}
renderTable();
//# sourceMappingURL=main.js.map