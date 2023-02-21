import {Col, Row } from 'antd';
import Logo from '../../assets/images/em-logo.svg'
import MoneySlider from '../dashboard/MoneySlider';
import DasboardHeader from '../share/DasboardHeader';
import Navbar from '../share/Navbar'

export default function App() {
  return (
    <div className='landing'>
      <DasboardHeader />

      <h1 className='margin-10 padding-10'>خوش آمدید، تست نژاد</h1>

      <MoneySlider />

      {/* <Row justify="center" align="middle" style={{marginBottom:'100px'}}>
        <Col span={24} style={{textAlign: 'center'}} className='logo-box'>
          <img src={Logo} className='logo' alt='bezhdar-logo'></img>
          <h1 style={{margin:0}}>بــــژدار</h1>
          <p>سیستم هوشمند سرمایه گذاری</p>
        </Col>
      </Row> */}

      <Navbar />
    </div>
  );
}
