interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 = { firstName: 'Victor', lastName: 'Kadiri', age: 21, location: 'Gbagada' };
const student1 = { firstName: 'Treasure', lastName: 'Okure', age: 21, location: 'UNILAG' };

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
