// useState
import {useState} from 'react'

function Counter(){
    // 2. Internal State
        const [counter, setCounter] = useState(0);

    // 3. Business Logic
        function increamnet(){
            setCounter(counter + 1);
        }

        function decreamnet(){
            setCounter(counter - 1);
        }

    // 4. Fetchers
    // async function getClubs(){
    //     let response = await fetch(
    //         'https://schoolapi-op58.onrender.com/v1/clubs',
    //         {
    //             'headers': {'Accept': '*'}
    //         }            
    //         );
    //     let clubs = await response.json();
    //     console.log(clubs);
    // }
    // getClubs();

    // 1. Content to be Rendered
        return (
            // JSX = JS + HTML + XML
            <div>
                <h1>Counter: {counter} </h1>

                <button onClick={increamnet}>+</button>
                <button onClick={decreamnet}>-</button>
            </div>
        )
}

export default Counter;
