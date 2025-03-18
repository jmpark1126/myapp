import React from 'react'

// export default function mytest(props) {
export default function mytest({title}) {
  return (
    <div className='bg-purple-800 p-5 m-10'>
        <p>Mytest 페이지입니다.</p>
        <p>앞 페이지에서 받은 값 : {title}</p>
        {/* <p>앞 페이지에서 받은 값 : {props.title}</p> */}
    </div>
  )
}
