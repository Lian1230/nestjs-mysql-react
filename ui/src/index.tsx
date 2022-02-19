import { FC } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IntlProvider, enUSIntl } from '@ant-design/pro-table';
import { StateInspector } from 'reinspect';
import DashBoard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import { Login } from './Login';
import { Header } from './Layout/header';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import './index.css';
import { StoreProvider, useStore } from './redux/store';

const { Content } = Layout;

const ProtectedRoute: FC = ({ children }) => {
  const { user } = useStore();

  return user ? <>{children}</> : <Navigate to="/" replace />;
};

const App = () => (
  <StateInspector>
    <StoreProvider>
      <IntlProvider value={{ intl: enUSIntl, valueTypeMap: {} }}>
        <BrowserRouter>
          <LayoutWrapper>
            <Header />
            <Content>
              <Routes>
                <Route
                  path="/feedback"
                  element={
                    <ProtectedRoute>
                      <DashBoard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/*" element={<Login />} />
              </Routes>
            </Content>
          </LayoutWrapper>
        </BrowserRouter>
      </IntlProvider>
    </StoreProvider>
  </StateInspector>
);

const LayoutWrapper = styled(Layout)`
  min-height: 100vh;
`;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
