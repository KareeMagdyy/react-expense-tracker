import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          amount={item.amount}
          title={item.title}
        />
      ))}
    </Card>
  );
}

export default Expenses;
