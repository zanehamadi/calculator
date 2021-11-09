import { useState } from "react"

function Home(){

    const [sign, setSign] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [secondNum, setSecondNum] = useState(false)

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
        let num1Copy = num1
        switch(sign){
            case '+':
                setNum1(num1Copy + num2)
                setNum2(0)
                setSign('')
                break;
            case '-':
                setNum1(num1Copy - num2)
                setNum2(0)
                setSign('')
                break;
            case '*':
                setNum1(num1Copy * num2)
                setNum2(0)
                setSign('')
                break;
            case '/':
                setNum1(num1Copy / num2)
                setNum2(0)
                setSign('')
                break;
            default:
                setNum1(num1Copy)
                setNum2(0)
                setSign('')
                break;
        }
    }



    return(
        <div className="calculator-body">
            {
                sign ?

                    num2 ?
                            <span className="calculator-display">{`${num1} ${sign} ${num2}`}</span>
                        :

                            <span className="calculator-display">{`${num1} ${sign}`}</span>
                :
                    <span className="calculator-display">{num1}</span>
            }
            <input type="number" value={sign} onChange={e => calculatorFunc(e)} onKeyDown={e => backSpaceHandler(e)}/>

            <div className="calculator-keys">
                <button className="calculator-back-button" onClick={backSpaceButtonFunc}>⌫</button>
                <button onClick={clearCalcFunc}>CLEAR</button>
            </div>


            <div className="calculator-numbers">
                <button value='1' onClick={e => calculatorFunc(e)}>1</button>
                <button value='2' onClick={e => calculatorFunc(e)}>2</button>
                <button value='3' onClick={e => calculatorFunc(e)}>3</button>
                <button value='4' onClick={e => calculatorFunc(e)}>4</button>
                <button value='5' onClick={e => calculatorFunc(e)}>5</button>
                <button value='6' onClick={e => calculatorFunc(e)}>6</button>
                <button value='7' onClick={e => calculatorFunc(e)}>7</button>
                <button value='8' onClick={e => calculatorFunc(e)}>8</button>
                <button value='9' onClick={e => calculatorFunc(e)}>9</button>
                <button value='0' onClick={e => calculatorFunc(e)}>0</button>
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