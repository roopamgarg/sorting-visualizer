import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppChart from '../charts/chart';
import { Button } from 'antd';
class selectionSort extends Component {
   
    state = {
        dataSet : [],
        currentIndexes:[]
    }

    DataQueue = [] 
    
    componentDidUpdate(){
        console.log("hgfdg")
         
        // if(this.state.changingData){
        //     // let startTime = new Date()
                    
        //     // while (true) {
        //     //     if( new Date()-startTime >= 200) {
        //     //         break;
        //     //     }
        //     // }
       
        // }
    }
    resetData = ()=>{
        this.setState({
            dataSet:this.props.arr.slice(0,this.props.arr.length),
            currentIndexes:[]
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSet:nextProps.arr.slice(0,nextProps.arr.length),
            currentIndexes:[]
        })
    }
    selectionSort = async () => {
    
        var A = this.state.dataSet
        var len = this.state.dataSet.length;
        for (var i = 0; i < len - 1; i = i + 1) {
         

                
                    var j_min = i;
                    
                    for (var j = i + 1; j < len; j = j + 1) {
                        if (A[j] < A[j_min]) {
                            j_min = j;
                           
                        } 
                    }
                    if (j_min !== i) {
                        
                        this.swap(A, i, j_min);
                        this.DataQueue.push({
                            arr:A.slice(0,len),
                            currentIndexes:[i,j_min]                            
                        })
                       
                        
                        
                        
                    } 

                  
           
        }
        
        this.DataQueue.forEach((data,i)=>{
            setTimeout(() => this.setState({
                dataSet: data.arr,
                currentIndexes: data.currentIndexes,
                }), i*50);
        })
        this.DataQueue = []
         
    }
    
    swap(A, x, y) {
        var temp = A[x];
        A[x] = A[y];
        A[y] = temp;
    }
    
   
    render() {
        return (
            <div>
                <Button onClick={this.selectionSort}>Sort</Button>
                <Button onClick={this.resetData}>Reset</Button>
            <AppChart 
                dataSet={this.state.dataSet} 
                currentIndexes={this.state.currentIndexes}
                />
            </div>
        );
    }
}
const mapStateToProps = state =>(
    {
        arr : state.arr
    }
  )
  
export default connect(mapStateToProps)(selectionSort);