import React from 'react';

const Images = (props)=>{
    console.log(props)
    return <div>
        <img
          alt="Game images"
          src={props.image}
        />
    </div>

};
export default Images;