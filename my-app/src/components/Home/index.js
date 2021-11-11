import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

function Home(){

    const [sign, setSign] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [secondNum, setSecondNum] = useState(false)
    const [fullProblem, setFullProblem] = useState('')
    const [sum, setSum] = useState('')

    const calculatorFunc = (e) => {
        let number = parseInt(e.target.value)
        if (number !== 0 && !number){
            return;
        } else{
            if(!secondNum) num1 ? setNum1( parseInt(num1.toString() + number.toString())) : setNum1(number)
            else num2 ? setNum2( parseInt(num2.toString() + number.toString())) : setNum2(number)
        }
    }


    const clearCalcFunc = () => {
        setNum1(0)
        setNum2(0)
        setSign('')
        setSecondNum(false)
        setSum('')
        setFullProblem('')
    }

    const backSpaceHandler = (e) => {
        if(e.key === 'Backspace'){
            if(!secondNum){
                if(num1){
                    let numArr = num1.toString().split('')
                    numArr.pop()
                    if(parseInt(numArr[0])) setNum1(parseInt(numArr.join('')))
                    else if(!parseInt(numArr[0]) && numArr.length > 1 ) setNum1(parseInt(numArr.join('')))
                    else setNum1(0)
                }else{
                    setNum1(0)
                }
            }else{
                if(num2){
                    let numArr = num2.toString().split('')
                    numArr.pop()
                    if(parseInt(numArr[0])) setNum2(parseInt(numArr.join('')))
                    else if(!parseInt(numArr[0]) && numArr.length > 1 ) setNum2(parseInt(numArr.join('')))
                    else setNum2(0)
                }else{
                    setNum2(0)
                } 
            }
        }
    }

    const backSpaceButtonFunc = () => {
        if(!secondNum){
            if(num1){
                let numArr = num1.toString().split('')
                numArr.pop()
                if(parseInt(numArr[0])) setNum1(parseInt(numArr.join('')))
                else if(!parseInt(numArr[0]) && numArr.length > 1 ) setNum1(parseInt(numArr.join('')))
                else setNum1(0)
            }else{
                setNum1(0)
            }
        }else{
            if(num2){
                let numArr = num2.toString().split('')
                numArr.pop()
                if(parseInt(numArr[0])) setNum2(parseInt(numArr.join('')))
                else if(!parseInt(numArr[0]) && numArr.length > 1 ) setNum2(parseInt(numArr.join('')))
                else setNum2(0)
            }else{
                setNum2(0)
            }
        }
    }

    const simpleSymbolFunc = (sign) => {
        if(sum){
            setNum1(sum)
            setSign('')
            setSecondNum(false)
            setNum2(0)
            setSum('')
            setFullProblem('')
        }
        switch(sign){
            case '+': 
                setSign('+');
                setSecondNum(true);
                break;
            case '-' : 
                setSign('-');
                setSecondNum(true);
                break;
            case '*': 
                setSign('*');
                setSecondNum(true);
                break;
            case '/' : 
                setSign('/');
                setSecondNum(true);
                break;
            default: 
                break;
        }
    } 

    const sumFunc = () => {
        setFullProblem(`${num1} ${sign} ${num2} =`)
        switch(sign){
            case '+':
                setSum(num1 + num2)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            case '-':
                setSum(num1 - num2)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            case '*':
                setSum(num1 * num2)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            case '/':
                setSum(num1 / num2)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            default:
                setSum(num1)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
        }
    }

    let inputLabel = 
    sign ?  
        `${num1} ${sign}`
        :

        ''

    let inputValue =
    sign ?
        num2
        :
        num1

    return(
        <div className="calculator-body">

            <TextField 
            id="filled-basic" 
            variant="filled"
            label={fullProblem ? fullProblem : inputLabel}
            value={sum ? sum : inputValue} 
            onChange={e => calculatorFunc(e)} 
            onKeyDown={e => backSpaceHandler(e)}
            />

            <div className="calculator-keys">
                <Button variant="outlined" className="calculator-back-Button" onClick={backSpaceButtonFunc}>⌫</Button>
                <Button variant="outlined" onClick={clearCalcFunc}>CLEAR</Button>
            </div>


            <div className="calculator-numbers">
                <Button variant="contained" style={{marginLeft:"5px"}} value='1' onClick={e => calculatorFunc(e)}>1</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='2' onClick={e => calculatorFunc(e)}>2</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='3' onClick={e => calculatorFunc(e)}>3</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='4' onClick={e => calculatorFunc(e)}>4</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='5' onClick={e => calculatorFunc(e)}>5</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='6' onClick={e => calculatorFunc(e)}>6</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='7' onClick={e => calculatorFunc(e)}>7</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='8' onClick={e => calculatorFunc(e)}>8</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='9' onClick={e => calculatorFunc(e)}>9</Button>
                <Button variant="contained" style={{marginLeft:"5px"}} value='0' onClick={e => calculatorFunc(e)}>0</Button>
            </div>
            <div className="calculator-symbols">
                <Button variant="outlined" onClick={() => simpleSymbolFunc('+')}>+</Button>
                <Button variant="outlined" onClick={() => simpleSymbolFunc('-')}>-</Button>
                <Button variant="outlined" onClick={() => simpleSymbolFunc('*')}>*</Button>
                <Button variant="outlined" onClick={() => simpleSymbolFunc('/')}>÷</Button>
            </div>
            <Button variant="outlined" style={{backgroundColor:"pink"}} onClick={sumFunc}>=</Button>
        </div>
    )
}


export default Home