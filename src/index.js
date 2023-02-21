import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <ConfigProvider
      direction='rtl'
      locale={fa_IR}
      theme={{ token: { fontFamily: 'IRANSans' } }}
    >
      <App />
    </ConfigProvider>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
