import React from 'react'

// export default function MyDiv3(probs) {
export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className='flex flex-col p-5 m-10
                    w-3/4 h-3/4
                    bg-lime-500 text-white'>
      {/* {`${probs.d1} > ${probs.d2} > ${probs.d3}`} */}
      {`${d1} > ${d2} > ${d3}`}
    </div>
  )
}
