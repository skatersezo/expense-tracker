import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {

    const filterExpensesHandler = (year) => {

        props.onFilter(year);
    }

    return (
        <Card className="expenses">
        <ExpensesFilter onFilterExpenses={filterExpensesHandler}/>
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