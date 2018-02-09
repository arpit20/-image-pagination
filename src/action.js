export const changePage = (pageNum,response)=>{
    return{
        type:"CHANGE_PAGE",
        payload:{pageNum,data:response}
    }
}

export const setPageSize = (pageSize)=>{
    return{
        type:"SET_PAGE_SIZE",
        payload:pageSize
    }
}


export const setFetchStatus = (fetchStatus)=>{
    return{
        type:"FETCH_NEXT_PAGE",
        payload:fetchStatus
    }
}