import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import NewExpense from "./NewExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter";

const DUMMY_EXPENSES=[
  {
    id:1,
  title:'Gift',
  location:'Delhi',
  amount:70,
  date:new Date(2021,7,19),
  },
  {
    id:2,
  title:'Car Rent',
  location:'Jaipur',
  amount:50,
  date:new Date(2023,7,19),
  },
  {
    id:3,
  title:'Food',
  location:'Kolkata',
  amount:10,
  date:new Date(2022,5,10),
  },
  {
    id:4,
  title:'Car Insurance',
  location:'Mumbai',
  amount:90,
  date:new Date(2022,6,16),
  },
]
function ExpenseDetail(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter(e => e.id !== expenseId));
  };
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // Filter expenses based on the selected year
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expense-item">
      <h2>Lets get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          location={expense.location}
          title={expense.title}
          amount={expense.amount}
          onDelete={() => deleteExpenseHandler(expense.id)}
        />
      ))}
    </Card>
  );
}

export default ExpenseDetail;
