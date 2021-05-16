import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpensesHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredItems = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
        <ExpensesFilter 
            selected={filteredYear} 
            onFilterExpenses={filterExpensesHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList 
            items={filteredItems}
        />
        </Card>
    );
}

export default Expenses;