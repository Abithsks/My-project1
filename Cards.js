import React from 'react'

function Cards(props) {
    return (

        <div className='Cards-container' >
            <h3 className='title'> {props.title} </h3>
            <img className='image' src={props.image} alt=''/>
            <div className='display'>
                <button className='watch' type="submit"> {props.watch} </button>
                <button className='card-color' type="submit"> {props.download} </button>
            </div>


        </div>
    )
}

export default Cards;
