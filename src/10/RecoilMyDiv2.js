import React from 'react'
import RecoilMyDiv3 from './RecoilMyDiv3'

export default function RecoilMyDiv2({dn1, dn2, dn3}) {
  return (
    <div className='flex flex-col p-5 m-10
                    w-3/4 h-3/4
                    justify-center items-center
                    bg-lime-700 text-white'>
      <div className='w-full justify-start'>
        {`${dn1} > ${dn2}`}
      </div>
      <RecoilMyDiv3 d1={dn1} d2={dn2} d3={dn3} />
    </div>
  )
}
