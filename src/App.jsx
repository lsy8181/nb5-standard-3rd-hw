import { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import StudentList from "./components/StudentList";

function App() {
  const initialStudents = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [students] = useState(initialStudents);
  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

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
      <FilterButtons
        filterByAge={filterByAge}
        filterByGrade={filterByGrade}
        resetFilter={resetFilter}
      />
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
