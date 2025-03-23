import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Page2() {

  const List = ['a', 'b', 'c'];

  const [items] = useSearchParams();
  console.log("items", items);

  const list = [...items]
  console.log("list", list);

  const mList = list.map(item => <li className='m-5' key={item[0]}>
                                    item[0] = {item[0]}
                                    <br/>
                                    item[1] = {item[1]}
                                    <br/>
                                    결과 : {List.includes(item[1]) ? "알파벳 입니다!" : "알파벳이 아닙니다..."}
                                  </li>)

  return (
    <div>
      <h1>page2</h1>
      <ul>
        {mList}
      </ul>
    </div>
  )
}
