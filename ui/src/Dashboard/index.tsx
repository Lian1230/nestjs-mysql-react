import { Divider } from 'antd';
import { Feedback } from './feedback';
import { FeedbackGrid } from './feedback-grid';
import styled from 'styled-components';

export default () => {
  return (
    <DashboardWrapper>
      <Feedback />
      <Divider />
      <FeedbackGrid />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    margin: 2px;
  }
  margin: 0 2rem;
`;
