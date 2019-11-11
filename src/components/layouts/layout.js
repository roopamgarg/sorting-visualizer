import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Slider from '../slider/slider';
import { connect } from 'react-redux';
import { applySelectionSort } from '../../redux';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu
 class SiderDemo extends React.Component {
  state = {
    collapsed: false,

  };
  

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />


          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">


            <Menu.Item key="1" >
              <Icon type="pie-chart" />
              <span>Selection Sort</span>
            </Menu.Item>
            <Menu.Item key="2" >
              <Icon type="pie-chart" />
              <span>Bubble Sort</span>
            </Menu.Item>
            <Menu.Item key="3" >
              <Icon type="pie-chart" />
              <span>Merge Sort</span>
            </Menu.Item>
            <Menu.Item key="4" >
              <Icon type="pie-chart" />
              <span>Quick Sort</span>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Slider/>
          <Content style={{ margin: '0 16px' }}>
           
            <div>
              
         
 
             {this.props.children}

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Made With <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> By Roopam Garg</Footer>
        </Layout>
      </Layout>
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
    applySelectionSort : () => dispatch(applySelectionSort())
      
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SiderDemo);