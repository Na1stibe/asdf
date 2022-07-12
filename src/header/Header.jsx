import {useState} from 'react'

export const Header = () => {
    const [count, setCount] = useState(0)

    function CountUp() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={CountUp}>하이루</button>
            <input value={count}/>
        </div>
    )
}

export default Header