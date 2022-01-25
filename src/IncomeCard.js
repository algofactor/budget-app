import React from 'react'

const IncomeCard = ({income}) => {
    return (
        <div className="income-subcard">
            <p className='income-subcard-desc'>{income.input}</p>
            <p className='income-subcard-value'>{income.value}</p>
        </div>
    )
}

export default IncomeCard
