import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
    { name: "Elmo", age: 20, grade: "E" },
    { name: "Fiona", age: 21, grade: "F" },
    { name: "Gabe", age: 22, grade: "A" },
    { name: "Hannah", age: 23, grade: "B" },
    { name: "Irene", age: 24, grade: "C" },
    { name: "Jenny", age: 25, grade: "D" },
    { name: "Kevin", age: 26, grade: "E" },
    { name: "Linda", age: 27, grade: "F" },
  ]);
  const [filteredStudents, setFilteredStudents] = useState(students);

  const filterByAge = (minAge) => {
    const result = students.filter((student) => student.age >= minAge);
    setFilteredStudents(result);
  };

  const filterByGrade = (grade) => {
    const result = students.filter((student) => student.grade === grade);
    setFilteredStudents(result);
  };

  const resetFilter = () => {
    setFilteredStudents(students);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <button onClick={() => filterByAge(24)}>24세 이상</button>
      <button onClick={() => filterByGrade("F")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>
            {student.name} - Age: {student.age}, Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
