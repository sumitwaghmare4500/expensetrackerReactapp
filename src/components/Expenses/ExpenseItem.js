import React, { useState } from 'react';
import ExpenseDate from './ExspenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
  const [title,setTitle]=useState(props.title)
  const[Expense,setExpen]=useState(props.amount)
  const changeTitle=()=>{
    setTitle("update")
  }
  const changeExpense=()=>{
    setExpen("100")
  }
    return(<div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item_description"><h2>{title}</h2></div>
        <div className="expense-item_description"><h2>{props.location}</h2></div>

        <div className="expense-item_price">${Expense}</div>
        <button onClick={changeTitle}>Change Title</button>
        <button onClick={changeExpense}>Change Expense</button>
        <button onClick={props.onDelete}>Delete</button>
    </div>
   )
      
}
export default ExpenseItem;