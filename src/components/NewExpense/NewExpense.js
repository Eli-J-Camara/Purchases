import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
    const[inputing, setInputing] = useState(false);

    const submissionHandler = (enteredSubmission) => {
        const expenseData = {
            ...enteredSubmission,
            id: Math.random().toString()
        };
        props.onAddSubmission(expenseData);
        setInputing(false)
    };

    const inputingHandler = () => {
        setInputing(true)
    };

    const cancelHandler = () => {
        setInputing(false)
    };

    return (
        <div className='new-expense'> 
            {!inputing && <button onClick={inputingHandler}>Add New Expense</button>}
            {inputing && <ExpenseForm onSubmission={submissionHandler} onCancel={cancelHandler} />}
        </div>
    );
};