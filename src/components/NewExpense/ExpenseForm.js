import { useState } from 'react';
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    });

    const titleChangeHanlder = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}; 
        });
    };

    const priceChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredPrice: event.target.value};
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value}; 
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expense_data = {};
        expense_data["title"] = userInput.enteredTitle;
        expense_data["price"] = +userInput.enteredPrice;
        expense_data["date"] = new Date(userInput.enteredDate);
        
        props.onSubmission(expense_data);

        setUserInput({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        });
    };

    return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={userInput.enteredTitle} onChange={titleChangeHanlder}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input 
                            type='number'
                            min='0.01'
                            step='0.01' 
                            value={userInput.enteredPrice}
                            onChange={priceChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input 
                            type='date'
                            min='2020-01-01' 
                            max='2023-12-31' 
                            value={userInput.enteredDate}
                            onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
    );
}
