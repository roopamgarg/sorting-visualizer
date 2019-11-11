import React from 'react'; 
import { Slider, Switch } from 'antd';
import {changeArraySize} from '../../redux/index'
import { connect } from 'react-redux';
class MySlider extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };
  onChange = (value) => {
    console.log(value)
    this.props.changeArraySize(value);

  }
  componentDidMount = () =>{
    this.props.changeArraySize()
}

  render() {
    const { disabled } = this.state;
    return (
      <div >
        <Slider defaultValue={50}  onChange={this.onChange} disabled={disabled} />
      </div>
    );
  }
}


const mapStateToProps = state =>(
  {
      arr : state.arr
  }
)

const mapDispatchToProps = dispatch =>{
  return {
      changeArraySize : (value) => dispatch(changeArraySize(value))
      
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(MySlider);