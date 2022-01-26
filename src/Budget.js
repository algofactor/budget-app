import React, { useState } from 'react'
import BudgetDetails from './BudgetDetails'
import BudgetInputForm from './BudgetInputForm'
import TotalBudget from './TotalBudget'

const Budget = () => {

    const [btnStyle, setBtnStyle] = useState({ color: "#03E7D4", borderColor: "#03E7D4"})

    const [inputValue, setInputValue] = useState('')

    const [value, setValue] = useState('')

    const [incomes, setIncomes] = useState([])
    
    const [expenses, setExpenses] = useState([])

    const getInput = (e) =>{
        setInputValue(e.target.value)    
    }
    
    const getValue = (e) =>{
        setValue(parseFloat(e.target.value))
    }

    
    const getIncomeSum = () =>{
        let sum = 0;
        incomes.map(e => {
            sum = sum + e.value
            return sum
        })
        return sum
    }
    
    const getExpenseSum = () =>{
        let sum = 0;
        expenses.map(e => {
            sum = sum + e.value
            return sum
        })
        return sum
    }

    const totalBudget = () =>{
        let sum = getIncomeSum() - getExpenseSum()         
        return sum;
    }

    return (
        <div>
            <TotalBudget getIncomeSum={getIncomeSum} getExpenseSum={getExpenseSum} totalBudget={totalBudget} />
            <BudgetInputForm inputValue={inputValue} value={value} getValue={getValue} getInput={getInput} incomes={incomes} setIncomes={setIncomes} expenses={expenses} setExpenses={setExpenses} setInputValue={setInputValue}  setValue={setValue} btnStyle={btnStyle} setBtnStyle={setBtnStyle} />
            <BudgetDetails incomes={incomes} expenses={expenses} />
        </div>
    )
}

export default Budget
