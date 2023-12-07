export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedStudent = { ...student };
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      updatedStudent.grade = studentGrade ? studentGrade.grade : 'N/A';
      return updatedStudent;
    });
}
