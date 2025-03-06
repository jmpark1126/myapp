import React from 'react'
import MyDiv3 from './MyDiv3'

// export default function MyDiv2(probs) {
export default function MyDiv2({dn1, dn2, dn3}) {
  return (
    <div className='flex flex-col p-5 m-10
                    w-3/4 h-3/4
                    justify-center items-center
                    bg-lime-700 text-white'>
      <div className='w-full justify-start'>
        {/* 1. probs 사용해서 백틱 문자열로 출력 */}
        {/* {`${probs.dn1} > ${probs.dn2}`}   */}
        {/* 2. 구조분해 방법으로 가져오기 */}
        {`${dn1} > ${dn2}`}
      </div>
      {/* <MyDiv3 d1={probs.dn1} d2={probs.dn2} d3={probs.dn3} /> */}
      <MyDiv3 d1={dn1} d2={dn2} d3={dn3} />
    </div>
  )
}
