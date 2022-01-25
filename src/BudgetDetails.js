import React from 'react'
import ExpenseCard from './ExpenseCard'
import IncomeCard from './IncomeCard'

const BudgetDetails = ({incomes, expenses}) => {
    return (
        <div className='budget-details'>
            <div className="details-container">
                <div className="income-cards">
                    <p>Income</p>
                    { incomes.map((el) => <IncomeCard income={el} key={el.id}  />)}
                </div>
                
                <div className="expense-cards">
                    <p>Expense</p>
                    {expenses.map((e) => <ExpenseCard expenses={e} key={e.id} />)}
                </div>
            </div>
        </div>
    )
}

export default BudgetDetails
