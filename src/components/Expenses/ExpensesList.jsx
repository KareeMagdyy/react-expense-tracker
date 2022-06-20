import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No Items Found!</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          amount={item.amount}
          title={item.title}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
