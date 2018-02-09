import React from 'react';

export const FilterComponent = (props) =>{

    return (
        <div>
               <label>Select page size:</label>    
               <select onChange={props.onPageSizeChangeHandler}>
                   <option>24</option>
                   <option>48</option>
                   <option>72</option>
                   <option>96</option>
               </select>
        </div>
    )
}

