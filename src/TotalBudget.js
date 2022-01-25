import React from 'react'

const TotalBudget = ({getIncomeSum, getExpenseSum, totalBudget}) => {
    return (
        <div className='total-budget'>
            <p className='budget-desc'>Net balance for current month: </p>
            <p style={{color: totalBudget() < 0 ? "#E73803" : "#fff"}} className='budget-figure'>{totalBudget()}</p>
            <div className="income-card">
                <p>Income</p>
                <p>{getIncomeSum()}</p>
            </div>
            <div className="expense-card">
                <p>Expense</p>
                <p>{getExpenseSum()}</p>
            </div>
        </div>
    )
}

export default TotalBudget
