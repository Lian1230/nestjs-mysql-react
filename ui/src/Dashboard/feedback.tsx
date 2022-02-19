import { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Rating } from 'react-simple-star-rating';
import request from 'umi-request';
import styled from 'styled-components';

const { TextArea } = Input;
const { Title } = Typography;

export const Feedback = () => {
  const [rating, setRating] = useState(5);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const submit = () => {
    request('http://localhost:3001/feedback', {data: {}}).then((res) => console.log(res));
  };

  return (
    <FeedbackWrapper>
      <Title level={3}>New Feedback</Title>
      <Title level={4}>Your rating:</Title>
      <Rating ratingValue={rating} onClick={handleRating} />
      <TextArea rows={5} placeholder="Please tell us more" maxLength={500} />
      <Submit
        type="primary"
        shape="round"
        icon={<SendOutlined />}
        size={'large'}
      >
        Submit
      </Submit>
    </FeedbackWrapper>
  );
};

const Submit = styled(Button)`
  margin: 1rem 0;
  width: min-content;
  align-self: end;
`;

const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 2rem 0;
  textarea {
    font-size: 20px;
  }

  .react-simple-star-rating {
    top: -2px;
    left: -5px;
  }
`;
