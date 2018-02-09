
import store from './store';
import {changePage,setFetchStatus} from './action';

const url='https://www.urbanclap.com/api/v1/seo_media/getSeoImages';


const getImagePromise = (params) => (
    new Promise((resolve,reject)=>{
        var http = new XMLHttpRequest();
        http.open('POST',url,true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.onload = function(){
            let data = JSON.parse(this.responseText);
            if(!data.isError)
                 resolve(data['success']['data'].media);
            else 
                 reject("Error");
            
        }
       
        http.send(JSON.stringify(params));
    }).then((response)=>{
        return response;
    }).catch(function(e) {
        console.log(e); 
    })
)

const getParams = (pageNum) =>(
    {
        url:'https://www.urbanclap.com/weddings/ideas/candid-photography',
        page_number:pageNum,
        no_fetch_filters:false
    }
)

const asyncParallel = (tasks,callback) =>{
    var length = tasks.length
    var complete=0;
    var results=[];
    tasks.forEach(function(task){
        task(function(data){
            complete++;
            results = [...results,...data];
            if(complete==length)
                 callback(results);
        })
    })
}

//get initial page
export const getPage = (pageNum)=>{
    
    getImagePromise(getParams(pageNum)).then((data)=>{
        store.dispatch(changePage(pageNum,data));                
    });
       
}

//get next page(s) on scroll when reached end of the page
// fetch pages parallely and change the state

export const onScrollSlideHandler = ({pageSize,pageNum,fetchStatus})=> {

    let numPages = Math.floor((pageSize/24));
    let tasks = [];
    for(var i=0;i<numPages;i++){
        tasks[i]= (function(i){
            return function(callback){
                getImagePromise(getParams(pageNum+i+1))
                .then((response)=>{
                    store.dispatch(changePage(pageNum+i+1,response));  
                    callback(response);
                })
            }
        })(i)
    }
    const finalCallback = (data)=>{
        //set final pageNum after all pages are fetched
        console.log("final callback");
        store.dispatch(changePage(pageNum+numPages,data)); 
        //set fetchStatus to true so next page can be fetched
        store.dispatch(setFetchStatus(true)); 
    }
    //fetch pages parallely
    asyncParallel(tasks,finalCallback);

    //change fetch status to false 
    store.dispatch(setFetchStatus(false)); 
    
};
