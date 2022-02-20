import { Space, Button, DatePicker, FormInstance } from 'antd';
import moment, { Moment } from 'moment';
import type { RangeValue } from 'rc-picker/lib/interface';
import styled from 'styled-components';
import { CalendarTwoTone } from '@ant-design/icons';
import { useState } from 'react';

const { RangePicker } = DatePicker;

export const DatePresets = ({ formInstance }: { formInstance: FormInstance }) => {
  const [dateRange, setDateRange] = useState<RangeValue<Moment>>();

  const submit = (pickedDateRange: RangeValue<Moment>) => {
    setDateRange(pickedDateRange);
    formInstance.setFieldsValue({
      createdAt: pickedDateRange?.map((dr) => dr?.format('YYYY-MM-DD')),
    });
    formInstance.submit();
  };

  return (
    <Wrapper>
      <Button
        onClick={() => {
          const startOf7DaysAgo = moment().subtract(7, 'days');
          const today = moment();
          submit([startOf7DaysAgo, today]);
        }}
      >
        Last 7 Days
      </Button>
      <Button
        onClick={() => {
          const startOfMonth = moment().startOf('month');
          const today = moment();
          submit([startOfMonth, today]);
        }}
      >
        This Month
      </Button>
      <RangePicker
        format="YYYY-MM-DD"
        allowClear={false}
        value={dateRange as any}
        onChange={(dr) => submit(dr)}
        suffixIcon={<CalendarTwoTone />}
      />
    </Wrapper>
  );
};

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
