import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() === parseInt(filterYear)
  );
 
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onYearFilter={filterYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
