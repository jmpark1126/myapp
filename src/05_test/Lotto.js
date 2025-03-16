import React, { useState } from 'react'
import Ball from './Ball'
import TailButton from '../UI/TailButton';

export default function Lotto() {

    const [ball, setBall] = useState([]);

    const handleOk = () => {
        let arr = [];

        while(arr.length < 7){
            let n = Math.floor(Math.random()*45)+1;
            if(!arr.includes(n)){
                arr.push(n);
            }
        }
        console.log(arr);
        let bouns = arr.splice(-1);
        console.log(bouns);

        arr.sort((a,b) => a-b); //오름차순 정렬
        console.log(arr);

        let temp = arr.concat(bouns);
        console.log(temp);

        //숫자 전달
        temp = temp.map(item=> <Ball key={item} num={item} />);

        temp.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);
        setBall(temp);
    }

    return (
        <div className="w-full flex flex-col 
                            justify-center items-center">
            <div className="m-10">
                {ball}
            </div>
            <div>
                <TailButton caption={'가잣!'} bcolor='lime' handleClick={handleOk} />
            </div>

        </div>
    )
}
