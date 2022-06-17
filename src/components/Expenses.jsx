import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ items }) {
  return (
    <Card className='expenses'>
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
