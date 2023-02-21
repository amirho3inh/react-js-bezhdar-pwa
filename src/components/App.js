import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Landing from './general/Landing'
import Dashboard from './general/Dashboard'
import AuthRouter from './auth/Router'
import '../assets/css/general.css'

const { Content } = Layout

function App() {
  return (
    <div className='app'>
      <Layout>
        <Content className='content'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth/*' element={<AuthRouter />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
