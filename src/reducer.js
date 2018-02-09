const initialState={
    pageNum:0,
    pageSize:24,
    data:[],
    fetchStatus:true
}
let newState ;

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case "CHANGE_PAGE":
            let data= [...state.data,...action.payload.data];
            let pageNum = action.payload.pageNum;
            newState = Object.assign({},state,{data,pageNum})
            return newState;
        
        case "SET_PAGE_SIZE":
            newState = Object.assign({},state,{pageSize:action.payload})
            return newState;
        
        case "FETCH_NEXT_PAGE":
            newState = Object.assign({},state,{fetchStatus:action.payload})
            return newState;
        default:
            return initialState;
    }
}

export default reducer;