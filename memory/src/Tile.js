import React, { useState } from 'react';

export default function Tile(props){
    
    const [visible, setVisible] = useState(props.shown === 1 ? 'visible' : 'invisible');

    function clickedTile(index, functieClick){
        console.log('clicked tile with index ' + index)
        setVisible('visible')
        functieClick(index)
        // setTimeout(function(){
        //     setVisible('invisible')
        // }, 2000);
    }
     return <div className=' bg-gray-500 rounded-[10px]' onClick={()=>clickedTile(props.tile,props.functieClick)}> 
        <img className={`${props.tile} ${visible}  `} src={`https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-${props.tile}.png`} 
            alt={props.altText}
        /> 
        
        </div> 
    
}

