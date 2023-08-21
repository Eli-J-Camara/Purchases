import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'
import './App.css';

const initial_expenses = [
  {
    id:'e1',
    title: 'Desk Chair',
    price: 50,
    date: new Date(2023, 2, 27)
  },
  {
    id:'e2',
    title: 'Bench Press',
    price: 360,
    date: new Date(2022, 10, 7)
  },
  {
    id:'e3',
    title: 'WRX STI (With spoiler)',
    price: 8000,
    date: new Date(2023, 3, 1)
  },
  {
    id:'e4',
    title: 'Liposuction',
    price: 50,
    date: new Date(2021, 11, 1)
  },
  {
    id:'e5',
    title: 'Cancer Treatment',
    price: 75,
    date: new Date(2021, 3, 1)
  },
  {
    id:'e6',
    title: 'Light Bulbs',
    price: 100,
    date: new Date(2021, 3, 1)
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = new_expense => {
    setExpenses((prevState) => {return [new_expense, ...prevState]});
    console.log(expenses);
  };

  return (
    <div>
      <h2 id='heading'>Let's get started!</h2>
      <NewExpense onAddSubmission={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
