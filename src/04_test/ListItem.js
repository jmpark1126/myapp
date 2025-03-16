import React, { use, useState } from 'react'

export default function ListItem({team, title, text}) {

    const [on, setOn] = useState(0);
    const [icon, setIcon] = useState('😒');

    const handleOk = () => {
        setOn(on+1);
        setIcon('❤️');
    }

  return (
    <div>
        <div>가수 : {team}</div>
        <div>제목 : {title}</div>
        <div>곡 소개 : {text}</div>
        <div onClick={handleOk} className='cursor-pointer'>
            <span>좋아요{icon}</span>
        </div>
        <span>{on}</span>
        <br/>
    </div>
  )
}
