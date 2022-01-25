import React, { useEffect, useRef, useState } from 'react'
import {FaCheck} from "react-icons/fa"

const BudgetInputForm = ({inputValue, value, getValue, getInput, incomes, setIncomes, expenses, setExpenses, setInputValue,  setValue, btnStyle, setBtnStyle }) => {
    const [style, setStyle] = useState({ borderColor: "#03E7D4" })

    const inputRef = useRef(null)
    useEffect(() => {
       inputRef.current.focus();
    }, [])

    const checkFocus = (e) =>{
        if (e.target.value === "plus") {
            setStyle({
                borderColor: "#03E7D4"
            })
            setBtnStyle({
                borderColor: "#03E7D4",
                color: "#03E7D4"
            })
        }else if (e.target.value === "minus") {
            setStyle({
                borderColor: "#E73803"
            })
            setBtnStyle({
                borderColor: "#E73803",
                color: "#E73803"
            })
        }
    }

    const setCursor = () =>{
        inputRef.current.focus();
    }

    const checkBtn = (e) =>{ 
        e.preventDefault(); 

        if(!inputValue || !value){
            return;
        }

        if (btnStyle.borderColor === "#03E7D4") {
            setIncomes([...incomes, {input: inputValue, value: value, id: Math.floor(Math.random()* 1000) }])
        }else if(btnStyle.borderColor === "#E73803") {
            setExpenses([...expenses, {input: inputValue, value: value, id: Math.floor(Math.random()* 1000) }])
        }

        setInputValue('')        
        setValue("")
        inputRef.current.focus();
    }

    return (
        <div className='section-form'>
            <form className='input-form'>
                <select onClick={checkFocus} onChange={setCursor} style={style}>
                    <option value="plus">Income</option>
                    <option value="minus">Expense</option>
                </select>
                <input value={inputValue} onChange={getInput} type="text" placeholder='Add description' style={style} ref={inputRef} />
                <input value={value} onChange={getValue} type="number" placeholder='Value' style={style} />
                <button type='submit' style={btnStyle} onClick={checkBtn} ><FaCheck /></button>
            </form>
        </div>
    )
}

export default BudgetInputForm
