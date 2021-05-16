import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpensesHandler = (year) => {
        setFilteredYear(year);
    }

    return (
        <Card className="expenses">
        <ExpensesFilter 
            selected={filteredYear} 
            onFilterExpenses={filterExpensesHandler}
        />
        {
            props.items.map(expense => {
                return (
                    <ExpenseItem
                    key={expense.id} 
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                    />
                )
            })
        }
        </Card>
    );
}

export default Expenses;