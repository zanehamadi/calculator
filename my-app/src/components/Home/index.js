import { useState } from "react"

function Home(){

    const [sign, setSign] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [secondNum, setSecondNum] = useState(false)
    const [solution, setSolution] = useState('')

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
        setSolution('')
    }

    const backSpaceHandler = (e) => {
        if(e.key === 'Backspace'){
            if(!secondNum){
                if(num1){
                    let numArr = num1.toString().split('')
                    numArr.pop()
                    if(parseInt(numArr[0])) setNum1(parseInt(numArr.join('')))
                    else if(!parseInt(numArr[0]) && numArr.length > 1 ) setNum1(parseInt(numArr.join('')))
                    else setNum1('')
                }else{
                    setNum1('')
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
                if(parseInt(numArr[0])) setNum1(parseInt(numArr.join('')))
                else if(!parseInt(numArr[0]) && numArr.length > 1 ) setNum1(parseInt(numArr.join('')))
                else setNum2(0)
            }else{
                setNum2(0)
            }
        }
    }

    const simpleSymbolFunc = (sign) => {
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
        switch(sign){
            case '+':
                setSolution(num1 + num2)
                break;
            case '-':
                setSolution(num1 - num2)
                break;
            case '*':
                setSolution(num1 * num2)
                break;
            case '/':
                setSolution(num1 / num2)
                break;
            default:
                setSolution(num1)
        }
    }

    return(
        <div className="calculator-body">
            {!solution ?
                <span className="calculator-display">{`${num1} ${sign} ${num2}`}</span>
                :
                <span className="calculator-display">{solution}</span>
            }
            <input type="number" value={sign} onChange={e => calculatorFunc(e)} onKeyDown={e => backSpaceHandler(e)}/>

            <div className="calculator-keys">
                <button className="calculator-back-button" onClick={backSpaceButtonFunc}>⌫</button>
                <button onClick={clearCalcFunc}>CLEAR</button>
            </div>


            <div className="calculator-numbers">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
            <div className="calculator-symbols">
                <button onClick={() => simpleSymbolFunc('+')}>+</button>
                <button onClick={() => simpleSymbolFunc('-')}>-</button>
                <button onClick={() => simpleSymbolFunc('*')}>*</button>
                <button onClick={() => simpleSymbolFunc('/')}>÷</button>
            </div>
            <button onClick={sumFunc}>=</button>
        </div>
    )
}


export default Home