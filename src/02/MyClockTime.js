import style from './MyClockTime.module.css';
import { useState, useEffect } from 'react';

function MyClockTime(){

    const [ctime, setCtime] = useState(new Date());

    useEffect(() => {
        const tm = setInterval(()=>{
            setCtime(new Date())
        }, 1000);

        return () => {
            clearInterval(tm);
        }
    }, []);

    return(
        <div className={style.c3}>
            현재 시각 : {ctime.toLocaleTimeString()}
            {/* toLocaleString() : 날짜까지 반환환, toLocaleTimeString() : 시간만 반환 */}
        </div>

    );
}

export default MyClockTime;