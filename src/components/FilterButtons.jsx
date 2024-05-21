import React from "react";

function FilterButtons({ filterByAge, filterByGrade, resetFilter }) {
  return (
    <div>
      <button onClick={() => filterByAge(18)}>18세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
