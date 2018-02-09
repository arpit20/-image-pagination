import React from 'react';
import {connect} from 'react-redux';

import {getPage,onScrollSlideHandler} from '../api';
import {ImageTileComponent} from '../components/ImageTileComponent';


let imageList=[];

class ImageTileContainer extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //get initial page
        getPage(this.props.pageNum+1);
      
        let timer;
        //attach scroll event to the window to fetch the pages when end of the page 
        //debounce the scroll event 
        window.addEventListener('scroll',(e)=>{
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
                if(!this.props.fetchStatus)//wait for last page fetch to complete before fetching next page
                    return;   
                clearTimeout(timer);     
                timer = setTimeout(onScrollSlideHandler.bind(this,{...this.props}),1000)
            }
        });
    }


    render(){
        return(
           <ImageTileComponent {...this.props}></ImageTileComponent>
        )
    }
}

const mapStateToProps = (state) =>{
   let {data,pageNum,pageSize,fetchStatus} = state;
   return {data,pageNum,pageSize,fetchStatus} ;
}

export default connect(mapStateToProps)(ImageTileContainer);


