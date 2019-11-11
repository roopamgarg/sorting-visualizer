import { createStore } from 'redux';
import chartDataReducer from './chartData/chartDataReducer'; 

const store = createStore(chartDataReducer);
export default store;