import { Input, Typography } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;
const { Title } = Typography;

export const Feedback = () => {
  return (
    <FeedbackWrapper>
      <Title level={3}>New Feedback</Title>
      <TextArea
        rows={6}
        placeholder="please enter some comment"
        maxLength={500}
      />
    </FeedbackWrapper>
  );
};

const FeedbackWrapper = styled.div`
  max-width: 800px;
  margin: 2rem 0;
`;
