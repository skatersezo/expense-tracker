import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props) {

    const [isExpenseFormOpen, setExpenseFormToggle] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 100).toString()
        };

        props.onAddExpense(expenseData);
    };

    const handleTogglePanel = () => {
        setExpenseFormToggle(!isExpenseFormOpen);
    };

    return (
        <div className="new-expense">
            {
                isExpenseFormOpen ?
                    <ExpenseForm 
                        onSaveExpenseData={saveExpenseDataHandler} 
                        onToggle={handleTogglePanel}
                    />
                    : <button onClick={handleTogglePanel}>Add new expense</button>
            }
        </div>
    )
}

export default NewExpense;