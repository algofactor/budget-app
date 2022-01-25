import React from 'react'

const ExpenseCard = ({expenses}) => {
    return (
        <div className="expense-subcard">
            <p className='income-subcard-desc'>{expenses.input}</p>
            <p className='expense-subcard-value'>{expenses.value}</p>
        </div>
    )
}

export default ExpenseCard
