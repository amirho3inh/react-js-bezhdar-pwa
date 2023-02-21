import { message } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import request from '../../tools/request'
import { Form, Text, Submit, TextPassword } from '../utils/Form'
import Logo from '../../assets/images/em-logo.svg'
import Password from 'antd/es/input/Password';

export default function App() {
  const [loading, setLoading] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate()

  function handelSubmit (values) {
    setLoading(true)
    request('/users', { method: 'POST', data: values })
      .then(response => {
        message.success('کاربر با موفقیت ساخته شد')
        navigate('/dashboard')
      })
      .catch(err => message.error('متاسفانه مشکلی پیش آمده است'))
      .finally(() => setLoading(false))
  }

  function handelSubmitFack (values) {
    setLoading(true)
    message.success('کاربر با موفقیت ساخته شد')
    navigate('/dashboard')
    setLoading(false)
  }

  return (
    <div className='login'>
      <div style={{textAlign: 'right',marginBottom: 70}}>
        <img src={Logo} className='logo' alt='bezhdar-logo'></img>
        <h1>ورود</h1>
      </div>
      <Form layout="vertical" onFinish={handelSubmitFack}>
        <Text
            label='نام کاربری'
            name='username'
            required
            placeholder='نام کاربری'
            prefix={<UserOutlined />}
          />
          <TextPassword
              label='گذرواژه'
              name='password'
              required
              placeholder='گذرواژه'
              prefix={<KeyOutlined />}
            />
          <div style={{textAlign: 'center'}}>
            <Submit label='ورود' loading={loading} shape="round"/>
          </div>
      </Form>
    </div>
  );
}
