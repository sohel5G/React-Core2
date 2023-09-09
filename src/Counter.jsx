import { useState } from "react"

export default function Counter() {


    // function useState(num) {
    //   function updateNum(value) {
    //     num = value;
    //   }
    //   return [num, updateNum];
    // }
    // const [count, setCount] = useState(0);



    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduse = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add +</button>
            <button onClick={handleReduse}>Rduce -</button>
        </div>
    )
}


