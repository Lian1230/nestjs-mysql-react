import { Space, Button, DatePicker, FormInstance } from 'antd';
import moment, { Moment } from 'moment';
import type { RangeValue } from 'rc-picker/lib/interface';
import styled from 'styled-components';
import { CalendarOutlined, CalendarTwoTone } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const { RangePicker } = DatePicker;

export const DatePresets = ({ formInstance }: { formInstance: FormInstance }) => {
  const [dateRange, setDateRange] = useState<RangeValue<Moment>>();
  const [pickedPreset, setPickedPreset] = useState<'LAST_7_DAYS' | 'THIS_MONTH' | 'CUSTOM'>();

  const currentDateRange = formInstance.getFieldValue('createdAt');
  useEffect(() => {
    if (!currentDateRange) {
      setPickedPreset(undefined);
    }
  }, [currentDateRange]);

  const submit = (pickedDateRange: [Moment, Moment]) => {
    // console.log(pickedDateRange.map((x) => x.format()));
    setDateRange(pickedDateRange);
    formInstance.setFieldsValue({
      createdAt: pickedDateRange?.map((dr) => dr?.format('YYYY-MM-DD HH:mm:ss')),
    });
    formInstance.submit();
  };

  return (
    <Wrapper>
      <DateButton
        className={classNames({ picked: pickedPreset === 'LAST_7_DAYS' })}
        onClick={() => {
          setPickedPreset('LAST_7_DAYS');
          const startOf7DaysAgo = moment().subtract(7, 'days');
          const endOfToday = moment().endOf('day');
          submit([startOf7DaysAgo, endOfToday]);
        }}
      >
        Last 7 Days
      </DateButton>
      <DateButton
        className={classNames({ picked: pickedPreset === 'THIS_MONTH' })}
        onClick={() => {
          setPickedPreset('THIS_MONTH');
          const startOfMonth = moment().startOf('month');
          const endOfToday = moment().endOf('day');
          submit([startOfMonth, endOfToday]);
        }}
      >
        This Month
      </DateButton>
      <RangePicker
        format="YYYY-MM-DD HH:mm:ss"
        allowClear={false}
        value={dateRange}
        onChange={(dr) => {
          if (!dr || !dr?.[0] || !dr?.[1]) return;
          setPickedPreset('CUSTOM');
          submit([dr[0].startOf('day'), dr[1].endOf('day')]);
        }}
        suffixIcon={pickedPreset === 'CUSTOM' ? <CalendarTwoTone /> : <CalendarOutlined />}
      />
    </Wrapper>
  );
};

const DateButton = styled(Button)`
  &.picked {
    color: #40a9ff;
    border-color: #40a9ff;
  }
`;

const Wrapper = styled(Space)`
  .ant-picker-input,
  .ant-picker-range-separator {
    display: none;
  }
  .ant-picker-suffix {
    margin: 0;
  }

  .ant-picker {
    height: 32px;
    cursor: pointer;
  }
`;
