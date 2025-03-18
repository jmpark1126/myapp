import React, { useEffect, useRef, useState } from 'react'
import TailButton from '../UI/TailButton';

export default function RefTest() {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    //더하기 버튼
    const handleAdd = () => {
        if(ref1.current.value == '') {
            alert("첫 번째 박스 숫자를 입력하세요!");
            ref1.current.focus();
            return;
        }
        if(ref2.current.value == ''){
            alert("두 번째 박스 숫자를 입력하세요!");
            ref2.current.focus();
            return;
        } 

        let num1 = parseInt(ref1.current.value);
        let num2 = parseInt(ref2.current.value);
        ref3.current.value = num1+num2;

    };

    //초기화 버튼
    const handleClear = () => {
        ref1.current.value = '';
        ref2.current.value = '';
        ref3.current.value = '';
    }

    //onFocus 되면 input 박스 초기화
    const onFocus = (ref) => {
        ref.current.value = '';
        ref3.current.value = '';
    }

    return (
        <div className="w-10/12 flex justify-center items-center">
            <div className="bg-slate-50 grid grid-cols-5 gap-2 m-5 p-5">
                <input type="number" id='txt1'
                    ref={ref1}
                    onFocus={()=>onFocus(ref1)}
                    className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-center rounded-lg text-xl p-2.5" />
                <div className="flex justify-center items-center text-xl font-bold">
                    +
                </div>
                <input type="number" id='txt2'
                    ref={ref2}
                    onFocus={()=>onFocus(ref2)}
                    className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-center rounded-lg text-xl p-2.5" />
                <TailButton caption='=' bcolor='lime' handleClick={handleAdd} />
                <input type="number" id='txt3'
                    ref={ref3}                    
                    className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-center rounded-lg text-xl p-2.5" />
                <TailButton caption='초기화' bcolor='orange' handleClick={handleClear} />
            </div>
        </div>
    )
}
