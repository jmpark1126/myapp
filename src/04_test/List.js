import React from 'react';
import MyLyrics from './MyLyrics.json';
import ListItem from './ListItem';

export default function List() {
    console.log(MyLyrics);

    const temp = MyLyrics.map(item => <ListItem 
                                        key={item.title}
                                        team={item.team}
                                        title={item.title}
                                        text={item.text} 
                            />);
    return (
        <div>
            {temp}
        </div>
    )
}
