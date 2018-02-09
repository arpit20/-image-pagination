import React from 'react';
import {connect} from 'react-redux';

import {setPageSize} from '../action';
import store from '../store';
import {FilterComponent} from '../components/FilterComponent';


class FilterContainer extends React.Component{
    
    constructor(props){
        super(props);
    }



    render(){
        return(
           <FilterComponent {...this.props}></FilterComponent>
        )
    }
}

const mapStateToProps = (state) =>{
   let {data,pageNum} = state;
   return {data,pageNum} ;
}

const mapDispatchToProps = (dispatch) =>{
   return{
    onPageSizeChangeHandler:function(e){
        let value = parseInt(e.target.value);
        store.dispatch(setPageSize(value));      
    }
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(FilterContainer);


