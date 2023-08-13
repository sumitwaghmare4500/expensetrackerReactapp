import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Initialize state for each input
    const [entertitle, setTitle] = useState('');
    const [enterlocation, setLocation] = useState('');
    const [enteramount, setAmount] = useState('');
    const [enterdate, setDate] = useState('');

    // Handle individual input changes
    const titleChangeHandler = (event) => setTitle(event.target.value);
    const locationChangeHandler = (event) => setLocation(event.target.value);
    const amountChangeHandler = (event) => setAmount(event.target.value);
    const dateChangeHandler = (event) => setDate(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const expenseData={
            title:entertitle,
            location:enterlocation,
            amount:enteramount,
            date:new Date(enterdate)
        }
        

        // Optionally, you can clear the form after submission
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setLocation('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={entertitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Location</label>
                    <input type="text" value={enterlocation} onChange={locationChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteramount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterdate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;





