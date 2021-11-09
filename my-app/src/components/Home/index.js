import { useState } from "react"

function Home(){

    const [sign, setSign] = useState('')
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')

    return(
        <div className="calculator-body">
            <input value={setSign} onChange=""/>
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
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>÷</button>
            </div>
        </div>
    )
}


export default Home