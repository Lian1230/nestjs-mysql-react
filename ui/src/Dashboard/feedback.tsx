import { useState, useEffect } from 'react';
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
  const [sessionMap, setSessionMap] = useState<{ [key in string]: Session[] }>();
  const [selectedGameId, setSelectedGameId] = useState<string>();
  const [selectedSessionId, setSelectedSessionId] = useState<number>();
  const [comment, setComment] = useState<string>();

  const updateGame = (): Promise<Game[]> =>
    request<Game[]>('/api/games/sessions-no-comment', {
      params: { userId: user?.id },
    })
      .then((games) => {
        setGames(games);
        setSessionMap(games.reduce((prev, curr) => ({ ...prev, [curr.id]: curr.sessions }), {}));
      })
      .catch((err) => message.error(err?.data?.message ?? 'Getting game error.', 5));

  useEffect(() => {
    updateGame();
  }, []);

  const sessions = !selectedGameId ? [] : sessionMap?.[selectedGameId] ?? [];
  const isNoAvailableSessions = !games?.length || (!!selectedGameId && !sessions.length);

  const submit = () => {
    request('/api/feedback', {
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
        updateGame();
        setSelectedGameId(undefined);
        setSelectedSessionId(undefined);
      })
      .catch((err) => {
        message.error(err?.data?.message ?? 'Unknown serverside error.', 5);
      });
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const getSessionDisplayName = (session?: Session) => {
    if (!games) return 'Select Session';
    if (isNoAvailableSessions) return 'No Session Available';
    const currSession = session || sessions.find((s) => s.id === selectedSessionId);
    if (!currSession) return 'Select Session';
    return `${currSession.duration} mins on ${moment(currSession.startedAt).format('YYYY-MM-DD')}`;
  };

  const getGameDisplayName = () => {
    if (!games) return 'Select Game';
    if (!games.length) return 'No Game Available';
    if (!selectedGameId) return 'Select Game';
    return games.find((g) => g.id.toString() === selectedGameId)?.name;
  };

  return (
    <Wrapper>
      <Title level={4}>Game and Session:</Title>
      <Space style={{ marginBottom: '1rem' }}>
        <Select
          loading={!games}
          disabled={!games?.length}
          value={getGameDisplayName()}
          style={{ minWidth: 130 }}
          size="large"
          onChange={(gameId) => {
            setSelectedGameId(gameId);
            setSelectedSessionId(sessionMap?.[gameId][0].id);
          }}
        >
          {games?.map((game) => (
            <Select.Option key={game.id}>{game.name}</Select.Option>
          ))}
        </Select>
        <Select
          loading={!games}
          disabled={isNoAvailableSessions}
          size="large"
          style={{ minWidth: 180 }}
          value={getSessionDisplayName()}
          onChange={(id) => setSelectedSessionId(Number.parseInt(id))}
        >
          {sessions.map((session) => (
            <Select.Option key={session.id}>{getSessionDisplayName(session)}</Select.Option>
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
    </Wrapper>
  );
};

const Submit = styled(Button)`
  margin: 1rem 0;
  width: min-content;
  align-self: end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 800px; */
  margin: 2rem 0;
  textarea {
    font-size: 20px;
  }
  .ant-select-selector {
    border-radius: 40px !important;
  }
  .react-simple-star-rating {
    top: -2px;
    left: -5px;
  }
`;
