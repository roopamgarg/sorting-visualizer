import {CHANGE_ARRAY_SIZE,APPLY_SELECTION_SORT} from './chartDataTypes';

export const changeArraySize = (size = 50) =>{
    console.log("load",size);
   return {
    type: CHANGE_ARRAY_SIZE,
    payload:{
        size
    }
   } 
    
}

export const applySelectionSort = () =>(
   {
    type: APPLY_SELECTION_SORT
   } 

) 