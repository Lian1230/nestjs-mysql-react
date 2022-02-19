import styled from 'styled-components';
import { Background } from './background';
import { Form } from './form';

export const Login = () => (
  <Wrapper>
    <Background />
    <Form />
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 21, 41);
  .ant-pro-form-login-header {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    .ant-pro-form-login-title {
      color: white;
      font-weight: 600;
      font-size: 33px;
      cursor: default;
    }
  }
  .ant-pro-form-login-container {
    position: relative;
    bottom: 5%;
  }
`;
