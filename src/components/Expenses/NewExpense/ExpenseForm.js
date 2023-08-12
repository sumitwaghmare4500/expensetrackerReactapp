import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    // Initialize state for each input
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // Handle individual input changes
    const titleChangeHandler = (event) => setTitle(event.target.value);
    const locationChangeHandler = (event) => setLocation(event.target.value);
    const amountChangeHandler = (event) => setAmount(event.target.value);
    const dateChangeHandler = (event) => setDate(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log('Title:', title);
        console.log('Location:', location);
        console.log('Amount:', amount);
        console.log('Date:', date);

        // Optionally, you can clear the form after submission
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
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Location</label>
                    <input type="text" value={location} onChange={locationChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;





