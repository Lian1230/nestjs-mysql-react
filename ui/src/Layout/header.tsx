import { Layout, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useStore } from '../redux/store';
import { Logout } from '../redux/action';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useStore();

  const logout = () => {
    dispatch(new Logout());
    navigate('/');
  };

  return (
    <Wrapper>
      {user && (
        <>
          <User>
            <h2>Hello {user.name}!</h2>
            <Button
              type="primary"
              shape="round"
              icon={<LogoutOutlined />}
              size={'large'}
              onClick={logout}
            >
              Logout
            </Button>
          </User>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Layout.Header)`
  @media only screen and (max-width: 600px) {
    padding: 2px;
  }
  padding: 0 2rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    color: white;
    margin: 0;
  }
`;
