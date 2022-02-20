import { useState, useEffect, useRef } from 'react';
import { Button, Input, Typography, Select, Space, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Rating } from 'react-simple-star-rating';
import request from 'umi-request';
import styled from 'styled-components';
import { useStore } from '../redux/store';
import { Game, Session } from '../redux/types';
import moment from 'moment';

const { TextArea } = Input;
const { Title } = Typography;

export const Feedback = () => {
  const { user } = useStore();
  const [rating, setRating] = useState(100);
  const [games, setGames] = useState<Game[]>();
  const [selectedGameId, setSelectedGameId] = useState<string>();
  const [selectedSessionId, setSelectedSessionId] = useState<number>();
  const [comment, setComment] = useState<string>();

  const sessionMap = useRef<{ [key in string]: Session[] }>();

  useEffect(() => {
    request<Game[]>('http://localhost:3001/games/sessions-no-comment', {
      params: {
        userId: user?.id,
      },
    }).then((games) => {
      setGames(games);
      sessionMap.current = games.reduce(
        (prev, curr) => ({ ...prev, [curr.id]: curr.sessions }),
        {},
      );
    });
  }, []);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const sessions = !selectedGameId ? [] : sessionMap.current?.[selectedGameId] ?? [];

  const submit = () => {
    request('http://localhost:3001/feedback', {
      method: 'POST',
      data: {
        userId: user?.id,
        sessionId: selectedSessionId,
        rating: rating / 20,
        content: comment,
      },
    })
      .then(() => {
        message.success('You feedback is published! Thank you for comment!');
      })
      .catch((err) => {
        message.error(err?.data?.message ?? 'Unknown serverside error.', 5);
      });
  };

  const formatSession = (session: Session = sessions[0]) => {
    if (!session) return undefined;
    return `${session.duration} mins on ${moment(session.startedAt).format('YYYY-MM-DD')}`;
  };

  return (
    <FeedbackWrapper>
      <Title level={4}>Game and Session:</Title>
      <Space style={{ marginBottom: '1rem' }}>
        <Select
          loading={!games}
          defaultValue={'Select Game'}
          style={{ minWidth: 130 }}
          onChange={(gameId) => {
            setSelectedGameId(gameId);
            setSelectedSessionId(sessionMap.current?.[gameId][0].id);
          }}
        >
          {games?.map((game) => (
            <Select.Option key={game.id}>{game.name}</Select.Option>
          ))}
        </Select>
        <Select
          defaultValue={'Select Session'}
          style={{ minWidth: 180 }}
          value={formatSession(sessions.find((s) => s.id === selectedSessionId))}
          onChange={(id) => setSelectedSessionId(Number.parseInt(id))}
        >
          {sessions.map((session) => (
            <Select.Option key={session.id}>{formatSession(session)}</Select.Option>
          ))}
        </Select>
      </Space>
      <Title level={4}>Your rating:</Title>
      <Rating ratingValue={rating} onClick={handleRating} />
      <TextArea
        rows={5}
        placeholder="Please tell us more"
        maxLength={500}
        onChange={(evt) => setComment(evt.target.value)}
      />
      <Submit
        type="primary"
        shape="round"
        icon={<SendOutlined />}
        size={'large'}
        onClick={submit}
        disabled={!selectedSessionId || !comment}
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
  /* max-width: 800px; */
  margin: 2rem 0;
  textarea {
    font-size: 20px;
  }

  .react-simple-star-rating {
    top: -2px;
    left: -5px;
  }
`;
