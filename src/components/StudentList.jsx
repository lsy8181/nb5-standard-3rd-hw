import React from "react";

function StudentList({ students }) {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          {student.name} - 나이: {student.age}, 학점: {student.grade}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
