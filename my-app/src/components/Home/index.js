import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { pink } from '@mui/material/colors';
import HistoryIcon from '@mui/icons-material/History';
import DeleteIcon from '@mui/icons-material/Delete';
import './home.css'


function Home(){

    const [sign, setSign] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [secondNum, setSecondNum] = useState(false)
    const [fullProblem, setFullProblem] = useState('')
    const [sum, setSum] = useState('')
    const [calcHistory, setCalcHistory] = useState([])
    const [showHistory, setShowHistory] = useState(false)
    const [backspace, setBackspace] = useState(false)

    const calculatorFunc = (e) => {
        if(backspace) return setBackspace(false);
        let isDecimal = e.target.value.slice(e.target.value.length - 1)
        let operatorArr = ["+","-","*","/"]
        if(operatorArr.includes(isDecimal)){
            simpleSymbolFunc(isDecimal)
        }
        let number = parseFloat(e.target.value)
        let regex = /^\d*\.?\d*$/
        
        if(sum){
            setNum1(sum)
            setSign('')
            setSecondNum(false)
            setNum2(0)
            setSum('')
            setFullProblem('')
            isDecimal === '.' ? setNum1(num1.toString() + '.') : setNum1(number)
        }
        else if (!number && isDecimal !== '.'){
            return;
        } else if (regex.test(e.target.value)){
            if(isDecimal === '.'){
                if(!secondNum) setNum1(num1.toString() + '.')
                else{
                    setNum2(num2.toString() + '.')
                }
            }else{
                if(!secondNum) setNum1(number)
                else{
                    setNum2(number)
                }
                
            }
        }else return
    }

    const numButtonFunc = (e) => {

        if(sum){
            console.log(e.target.value)
            setNum2(0)
            setNum1(0)
            setSign('')
            setSecondNum(false)
            setSum('')
            setFullProblem('')
            return setNum1(e.target.value)
        }

        let number = parseFloat(e.target.value)
        let regex = /^\d*\.?\d*$/
        if (!number && e.target.value !== '.'){
            return;
        } else if (regex.test(e.target.value)){
            if(e.target.value === '.'){
                if(!secondNum) setNum1(num1.toString() + '.')
                else{
                    setNum2(num2.toString() + '.')
                }
            }else{
                if(!secondNum){
                    if(num1 === 0 ) setNum1(e.target.value)
                    else{
                        let numArr = num1.toString().split('')
                        numArr.push(e.target.value)
                        let newNum = numArr.join('')
                        setNum1(newNum)
                    }
                }
                else{
                    if(num2 === 0) setNum2(e.target.value)
                    else{
                        let numArr = num2.toString().split('')
                        numArr.push(e.target.value)
                        let newNum = numArr.join('')
                        setNum2(newNum)
                    }
                }
                
            }
        }else return
    }

    const decimalButton = () => {
        if(secondNum && !num2.toString().includes('.')) setNum2(num2 + '.')
        else if(!num1.toString().includes('.')) setNum1(num1 + '.')
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
            setBackspace(true)
            if(!secondNum){
                if(num1){
                    let numArr = num1.toString().split('')
                    numArr.pop()
                    if(!numArr.length) setNum1(0) 
                    else setNum1(numArr.join(''))
                }else{
                    setNum1(0)
                }
            }else{
                if(num2){
                    let numArr = num2.toString().split('')
                    numArr.pop()
                    if(!numArr.length) setNum1(0) 
                    else setNum2(numArr.join(''))
                }else{
                    setNum2(0)
                } 
            }
        }if(e.key === 'Enter'){
            sumFunc()
        }
    }

    const backSpaceButtonFunc = () => {
        setBackspace(true)
        if(!secondNum){
            if(num1){
                    let numArr = num1.toString().split('')
                    numArr.pop()
                    if(!numArr.length) setNum1(0) 
                    else setNum1(numArr.join(''))
            }else{
                setNum1(0)
            }
        }else{
            if(num2){
                let numArr = num2.toString().split('')
                numArr.pop()
                if(!numArr.length) setNum2(0) 
                else setNum2(numArr.join(''))
            }else{
                setNum2(0)
            }
        }
    }

    const simpleSymbolFunc = (sign) => {
        if(sum || sum === 0){
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
        let sumCopy;
        let calcHistoryCopy = calcHistory
        switch(sign){
            case '+':
                setSum(num1 + num2)
                sumCopy = num1 + num2
                calcHistoryCopy.unshift(`${num1} ${sign} ${num2} = ${sumCopy}`)
                setCalcHistory(calcHistoryCopy)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            case '-':
                setSum(num1 - num2)
                sumCopy = num1 - num2
                calcHistoryCopy.unshift(`${num1} ${sign} ${num2} = ${sumCopy}`)
                setCalcHistory(calcHistoryCopy)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            case '*':
                setSum(num1 * num2)
                sumCopy = num1 * num2
                calcHistoryCopy.unshift(`${num1} ${sign} ${num2} = ${sumCopy}`)
                setCalcHistory(calcHistoryCopy)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            case '/':
                setSum(num1 / num2)
                sumCopy = num1 / num2
                calcHistoryCopy.unshift(`${num1} ${sign} ${num2} = ${sumCopy}`)
                setCalcHistory(calcHistoryCopy)
                setSecondNum(false)
                setNum2(0)
                setSign('')
                break;
            default:
                setSum(num1)
                setFullProblem(`${num1} =`)
                break;
        }

    }

    const negateFunc = () => {
        if(sum) setSum(sum * -1)
        else if(secondNum) setNum2(num2 * -1)
        else setNum1(num1 * -1)
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

    
    let toggleHistory = () => {
        if(showHistory) setShowHistory(false)
        else setShowHistory(true)
    }

    const powerOf2 = () => {
        if(sum) setSum(sum**2)
        else if(secondNum) setNum2(num2**2)
        else setNum1(num1**2)
    }

    const squareRoot2 = () => {
        if(sum) setSum(sum**.5)
        else if(secondNum) setNum2(num2**.5)
        else setNum1(num1**.5)
    }


    return(
        <div className="calculator-body">

            <TextField 
            id="filled-basic" 
            variant="filled"
            label={fullProblem ? fullProblem : inputLabel}
            value={sum === 0 || sum ? sum : inputValue} 
            onChange={e => calculatorFunc(e)} 
            onKeyDown={e => backSpaceHandler(e)}
            />

            <Button variant="outlined" className="calculator-back-Button" onClick={backSpaceButtonFunc}>⌫</Button>
            <Button variant="outlined" onClick={clearCalcFunc}>CLEAR</Button>
            <Button variant="outlined" onClick={powerOf2}>𝑥2</Button>
            <Button variant="outlined" onClick={squareRoot2}>√</Button>


            <Button variant="contained" value='1' id="button1" onClick={e => numButtonFunc(e)}>1</Button>
            <Button variant="contained" value='2' id="button2" onClick={e => numButtonFunc(e)}>2</Button>
            <Button variant="contained" value='3' id="button3" onClick={e => numButtonFunc(e)}>3</Button>
            <Button variant="contained" value='4' id="button4" onClick={e => numButtonFunc(e)}>4</Button>
            <Button variant="contained" value='5' id="button5" onClick={e => numButtonFunc(e)}>5</Button>
            <Button variant="contained" value='6' id="button6" onClick={e => numButtonFunc(e)}>6</Button>
            <Button variant="contained" value='7' id="button7" onClick={e => numButtonFunc(e)}>7</Button>
            <Button variant="contained" value='8' id="button8" onClick={e => numButtonFunc(e)}>8</Button>
            <Button variant="contained" value='9' id="button9" onClick={e => numButtonFunc(e)}>9</Button>
            <Button variant="contained" value='0' id="button0" onClick={e => numButtonFunc(e)}>0</Button>
            <Button variant="contained" id="decimalButton" onClick={decimalButton}>.</Button>
            <Button variant="contained" id="negateButton" onClick={negateFunc}>+/-</Button>
            <Button variant="outlined" onClick={() => simpleSymbolFunc('+')}>+</Button>
            <Button variant="outlined" onClick={() => simpleSymbolFunc('-')}>-</Button>
            <Button variant="outlined" onClick={() => simpleSymbolFunc('*')}>×</Button>
            <Button variant="outlined" onClick={() => simpleSymbolFunc('/')}>÷</Button>
            <Button variant="outlined" style={{backgroundColor:"pink"}} onClick={sumFunc}>=</Button>
            <Button><HistoryIcon sx={{ color: pink[300] }} onClick={toggleHistory}/></Button>
            {showHistory && <Button><DeleteIcon sx={{ color: pink[200]}} onClick={() => setCalcHistory([])} /></Button>}
            {showHistory && calcHistory.map(e => <p>{e}</p>)}
        </div>
    )
}


export default Home