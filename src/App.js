import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import SiderDemo from './components/layouts/layout'
import './App.css';
import SelectionSort from './components/sortingAlgos/selectionSort'
import Chart from './components/charts/chart'
function App() {
  return (
    <Provider store={store}>    
    <div className="App">
      
      <SiderDemo>
        <SelectionSort/>
      </SiderDemo>
    </div>
    </Provider>

  );
}

export default App;
