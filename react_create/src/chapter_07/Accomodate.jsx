import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    }); // mount, unmount하고 컴포넌트가 업데이트될때마다 호출됨

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count vakue: ${count}`);
    }, [count]); // mount와 count 변할때만 effect 발동

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accomodate;