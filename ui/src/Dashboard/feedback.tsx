import { useState, useEffect, useRef } from 'react';
import { Button, Input, Typography, Select } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Rating } from 'react-simple-star-rating';
import request from 'umi-request';
import styled from 'styled-components';
import { useStore } from '../redux/store';
import { Game, Session } from '../redux/types';

const { TextArea } = Input;
const { Title } = Typography;

export const Feedback = () => {
  const { user } = useStore();
  const [rating, setRating] = useState(100);
  const [games, setGames] = useState<Game[]>();
  const [selectedGameId, setSelectedGameId] = useState<string>();

  const selectedSessionId = useRef<number>();
  const comment = useRef<string>();

  useEffect(() => {
    request<Game[]>('http://localhost:3001/games', {
      params: {
        userId: user?.id,
        includeSessions: true,
      },
    }).then((games) => setGames(games));
  }, []);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const submit = () => {
    console.log({
      userId: user?.id,
      sessionId: selectedSessionId.current,
      rating: rating / 20,
      content: comment.current,
    });
    // request('http://localhost:3001/feedback', {
    //   method: 'POST',
    //   data: {},
    // }).then((res) => console.log(res));
  };

  const sessions =
    games
      ?.filter((g) => g.id.toString() === selectedGameId)
      ?.map((g) => g.session || [])
      ?.flat() ?? [];

  const formatSession = (session: Session) => {
    if (!session) return undefined;
    return `${session.duration} mins from ${new Date(
      session.startTime,
    ).toDateString()}`;
  };

  return (
    <FeedbackWrapper>
      <Title level={3}>New Feedback</Title>
      <Title level={4}>Game and Session:</Title>
      <div>
        <Select
          loading={!games}
          defaultValue={'Select Game'}
          onChange={(gameId) => {
            setSelectedGameId(gameId);
          }}
        >
          {games?.map((game) => (
            <Select.Option key={game.id}>{game.name}</Select.Option>
          ))}
        </Select>
        <Select
          defaultValue={'Select Session'}
          value={formatSession(sessions[0])}
          onChange={(sessionId) => {
            selectedSessionId.current = Number.parseInt(sessionId);
          }}
        >
          {sessions?.map((session) => (
            <Select.Option key={session.id}>
              {formatSession(session)}
            </Select.Option>
          ))}
        </Select>
      </div>
      <Title level={4}>Your rating:</Title>
      <Rating ratingValue={rating} onClick={handleRating} />
      <TextArea
        rows={5}
        placeholder="Please tell us more"
        maxLength={500}
        onChange={(evt) => (comment.current = evt.target.value)}
      />
      <Submit
        type="primary"
        shape="round"
        icon={<SendOutlined />}
        size={'large'}
        onClick={submit}
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
