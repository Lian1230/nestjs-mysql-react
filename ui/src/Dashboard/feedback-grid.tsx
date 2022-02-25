import { useRef } from 'react';
import { Space } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Rating } from 'react-simple-star-rating';
import request from 'umi-request';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import { DatePresets } from './date-range-presets';
import { Feedback } from '../redux/types';

const UserRating = ({ rating }: { rating: number }) => {
  return (
    <RatingWrapper>
      <Rating ratingValue={(rating / 5) * 100} readonly size={30} />
    </RatingWrapper>
  );
};

const RatingWrapper = styled(Space)`
  @media only screen and (max-width: 800px) {
    .react-simple-star-rating {
      top: 2px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const columns: ProColumns<Feedback>[] = [
  {
    title: 'Rating',
    dataIndex: 'rating',
    search: false,
    sorter: true,
    width: 170,
    render: (_, { rating }) => <UserRating rating={rating} />,
  },
  {
    title: 'Comment',
    dataIndex: 'content',
    valueType: 'textarea',
    copyable: true,
    width: 300,
    // ellipsis: true,
    // onFilter: true,
    search: false,
  },
  {
    title: 'Author',
    dataIndex: 'authorName',
    search: false,
    width: 120,
  },
  {
    title: 'Game',
    dataIndex: 'gameName',
    search: false,
    width: 120,
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    search: false,
    width: 60,
    renderText: (text) => `${text} mins`,
  },
  {
    className: 'created_at',
    title: 'Created At',
    dataIndex: 'createdAt',
    valueType: 'dateTime',
    sorter: true,
    hideInSearch: true,
    width: 100,
  },
  {
    title: null,
    key: 'createdAt',
    dataIndex: 'createdAt',
    valueType: 'dateRange',
    hideInTable: true,
    renderFormItem: (_, __, formInstance) => <DatePresets formInstance={formInstance} />,
    search: {
      transform: (value) => ({
        startedAt: value?.[0],
        endTime: value?.[1],
      }),
    },
  },
];

export const FeedbackGrid = () => {
  const actionRef = useRef<ActionType>();
  return (
    <Wrapper>
      <ProTable<Feedback>
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}, sort, _filter) => {
          if (!isEmpty(sort)) {
            const sortBy = Object.keys(sort)[0];
            params.sort = `${sort[sortBy] === 'ascend' ? '+' : '-'}${sortBy}`;
          } else {
            params.sort = '-createdAt';
          }
          return request<{ data: Feedback[] }>('/api/feedbacks', { params });
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          syncToUrl: (values, type) =>
            type === 'get'
              ? {
                  ...values,
                  created_at: [values.startedAt, values.endTime],
                }
              : values,
        }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
  .ant-card-body {
    padding: 0;
  }
  .ant-pro-table-list-toolbar {
    padding: 8px;
  }
  .ant-pagination {
    margin: 16px 12px;
  }
  .ant-pro-table-list-toolbar-setting-item {
    svg {
      cursor: pointer;
    }
  }
  .ant-table.ant-table-middle {
    @media only screen and (max-width: 900px) {
      .created_at {
        font-size: 12px;
      }
    }
    @media only screen and (max-width: 800px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 700px) {
      .created_at {
        font-size: 10px;
      }
    }
  }
`;
