import {CHANGE_ARRAY_SIZE,APPLY_SELECTION_SORT} from './chartDataTypes'
import { generateArray }  from '../helpers/helper'
import {selectionSort } from '../helpers/selectionSort';
const initialState = {
    arr : []
}
const  changeDataReducer = (state = initialState ,action) =>{
    console.log(state)
    switch(action.type){
        case CHANGE_ARRAY_SIZE: return {
            ...state,
            arr: generateArray(action.payload.size)

        }
        case APPLY_SELECTION_SORT: return {
            ...state,
            arr: selectionSort(state.arr)

        }
        default: return state;
    }
}

export default changeDataReducer