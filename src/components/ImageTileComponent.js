import React from 'react';

export const ImageTileComponent = (props) =>{

    return (
        <div className="image-list">
            {
                props.data.map((image)=>(
                    <div className="image-list__item">
                        <img src={image.url}></img>
                        <div>{image.description}</div>
                    </div>
                ))
            }
         </div>   
    )
}