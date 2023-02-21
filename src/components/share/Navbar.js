import { SettingOutlined, PlusOutlined, DashboardOutlined, BarChartOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Row, Col, Avatar } from 'antd'
import { useState } from 'react';
import '../../assets/css/navbar.css'

function NavbarMe () {
  return <div className='navbar-main'>
    <Row className='list'>
      <Col flex={1} className='item'><DashboardOutlined style={{fontSize:'36px'}} /></Col>
      <Col flex={1} className='item'><BarChartOutlined style={{fontSize:'36px'}} /></Col>
      <Col flex={1} className='item'>
        <div className='center-btn'><PlusOutlined style={{fontSize:'36px'}} /></div>
      </Col>
      <Col flex={1} className='item'><CreditCardOutlined style={{fontSize:'36px'}} /></Col>
      <Col flex={1} className='item'><SettingOutlined style={{fontSize:'36px'}} /></Col>
    </Row>
  </div>
}

export default NavbarMe
