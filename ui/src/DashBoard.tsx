import { useRef } from 'react';
import { Button, Tag, Space, Menu, Dropdown } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { IntlProvider, enUSIntl } from '@ant-design/pro-table';
import { Rating } from 'react-simple-star-rating';
import request from 'umi-request';
import { isEmpty } from 'lodash';

type UserFeedback = {
  id: number;
  rating: number;
  content: string;
  authorName: string;
  gameName: string;
  timeCreated: string;
};

const columns: ProColumns<UserFeedback>[] = [
  {
    title: 'Rating',
    dataIndex: 'rating',
    search: false,
    sorter: true,
    width: 230,
    render: (_, { rating }) => (
      <Space>
        <Rating ratingValue={(rating / 5) * 100} readonly />
      </Space>
    ),
  },
  {
    title: 'Comment',
    dataIndex: 'content',
    copyable: true,
    ellipsis: true,
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
    title: 'Created At',
    dataIndex: 'timeCreated',
    valueType: 'dateTime',
    sorter: true,
    hideInSearch: true,
    width: 180,
  },
  {
    title: 'Created At',
    dataIndex: 'timeCreated',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      // transform: (value) => `${value[0]},${value[1]}`,
      transform: (value) => ({
        startTime: value[0],
        endTime: value[1],
      }),
    },
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <IntlProvider value={{ intl: enUSIntl, valueTypeMap: {} }}>
      <ProTable<UserFeedback>
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}, sort, filter) => {
          if (!isEmpty(sort)) {
            const sortBy = Object.keys(sort)[0];
            params.sort = `${sort[sortBy] === 'ascend' ? '+' : '-'}${sortBy}`;
          }
          return request<{ data: UserFeedback[] }>(
            'http://localhost:3001/feedbacks',
            { params },
          );
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
                  created_at: [values.startTime, values.endTime],
                }
              : values,
        }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
      />
    </IntlProvider>
  );
};
