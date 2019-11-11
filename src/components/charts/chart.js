import React from 'react';
import { Doughnut,Bar,Line  } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { defaults } from 'react-chartjs-2';
defaults.global.animation.duration = 20;
 defaults.global.elements.line.backgroundColor = 'rgba(255,0,0,1)';
 defaults.global.elements.line.borderWidth = 10;
 defaults.global.elements.line.borderColor = 'rgba(255,0,0,1)';

class AppChart extends React.Component{
     

    render = () => {
        console.log(defaults.global.elements.line)

      
        const data = {
            
            labels: this.props.dataSet.map((val,index)=>index),
          
            datasets: [{
                label: 'Value',
                data: this.props.dataSet,
                
                
                //  fill:false,
                 backgroundColor:'rgba(54, 162, 235, 0.1)',
                 borderColor:'rgba(54, 162, 235, 0.4)',
                // showLine:false,
                
               
                lineTension:0.2,
                pointRadius:3,
                pointBorderColor:'rgba(54, 162, 235, 1)',
                pointBackgroundColor: this.props.dataSet.map((data,index)=>{
                    
                    if(this.props.currentIndexes && this.props.currentIndexes.includes(index)){
                        return 'rgba(255, 99, 132, 1)';
                    }
                    return 'rgba(54, 162, 235, 1)';
                }),
                pointBorderColor: this.props.dataSet.map(()=>(data,index)=>{
                

                    if(this.props.currentIndexes && this.props.currentIndexes.includes(index)){
                        return 'rgba(255, 99, 132, 1)';
                    }
                    return 'rgba(54, 162, 235, 1)';
                }),
                 
                borderWidth: 1
            }],
           
        }

        const options= {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            maintainAspectRatio: false,
            
        }
        
        return(
    <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
       
        <Line data={data}
        width={100}
        height={50}
        options={options}
    
        redraw 
         />
    </div>)
    
    }
}

// const mapStateToProps = state =>(
//     {
//         arr : state.arr
//     }
// )


export default (AppChart);