import TailButton from "../UI/TailButton"
import Ball from "./Ball";
import { useState } from "react";

export default function Lotto() {

    const [tags, setTags] = useState();

    const handbleOk = () => {
        let arr = [];

        while(arr.length < 7) {
            let n = Math.floor(Math.random()*45)+1;

            //문자열에서 숫자 중복 방지
            if(!arr.includes(n)) arr.push(n);
        }

        //arr문자열에서 뒤에서 하나 잘라서서 새로운 변수로 선언(보너스 번호)
        let bouns = arr.splice(-1);
        //오름차순 정렬
        arr.sort((a,b)=>(a-b)); 
        console.log(arr, bouns);

        //변수 전달을 위해서 문자열+변수(concat)
        let tm = arr.concat(bouns);
        tm = tm.map(item => <Ball n={item} key={`b${item}`} />)

        //"+" 추가
        tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>)
        setTags(tm);
    }

    return (
        <div className="w-full flex flex-col 
                        justify-center items-center">
            <div className="m-10">
                {tags}
            </div>
            <div>
                <TailButton caption={'로또번호생성'} bcolor='orange' handleClick={handbleOk} />
            </div>
        
        </div>
    )
  
}
