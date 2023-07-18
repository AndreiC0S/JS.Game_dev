import React, { useState } from 'react';

export default function Tile(props){

    const [visible, setVisible] = useState('invisible')

    function clickedTile(index){
        console.log('clicked tile with index ' + index)
        setVisible('visible')
    }
    return <div className=' bg-gray-500 rounded-[20px]' onClick={()=>clickedTile(props.tile)}>
        <img className={`${props.tile} ${visible}  `} src={`https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-${props.tile}.png`} alt={props.altText} ></img></div>
    
}

