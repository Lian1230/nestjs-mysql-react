import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { Promise } from 'bluebird';
import request from 'umi-request';
import { PersistUser, User } from '../redux/action';
import { useStore } from '../redux/store';

const defaultUser = {
  id: 1,
  name: 'Lian',
  email: 'lian@unity3d.com',
};

export const Form = () => {
  const navigate = useNavigate();
  const { dispatch } = useStore();
  const [email, setEmail] = useState<string>('');
  const [passcode, setPasscode] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    request('http://localhost:3001/users').then((res) => setUsers(res));
  }, []);

  const autoComplete = (mail: string = defaultUser.email) => {
    setEmail(mail);
    setPasscode('unity-----------------------');
  };

  const onSubmit = () => {
    if (!email || !passcode) {
      autoComplete();
    }
    dispatch(
      new PersistUser(users.find((u) => u.email === email) || defaultUser),
    );
    return Promise.delay(500).then(() => navigate('/feedback'));
  };

  const menu = (
    <Menu>
      {users.map((u) => (
        <Menu.Item key={u.id} onClick={() => autoComplete(u.email)}>
          {u.email}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <LoginForm title="Login" onFinish={onSubmit}>
      <ProFormText
        /* @ts-ignore */
        value={email}
        onChange={(evt: any) => {
          console.log(evt.target.value);
          setEmail(evt.target.value);
        }}
        name="username"
        fieldProps={{
          size: 'large',
          prefix: (
            <Dropdown overlay={menu} trigger={['click']}>
              <UserOutlined className={'prefixIcon'} />
            </Dropdown>
          ),
        }}
        placeholder={`email: ${defaultUser.email}`}
        rules={[
          {
            required: false,
            message: 'Please enter your account',
          },
        ]}
      />

      <ProFormText.Password
        /* @ts-ignore */
        value={passcode}
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
        }}
        placeholder={'passcode: unity'}
        rules={[
          {
            required: false,
            message: 'Please enter your passcode',
          },
        ]}
      />
    </LoginForm>
  );
};
