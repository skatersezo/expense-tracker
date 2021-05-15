import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {

    return (
        <div className="expenses">
        {
            props.items.map(expense => {
                return (
                    <ExpenseItem 
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                    />
                )
            })
        }
        </div>
    );
}

export default Expenses;