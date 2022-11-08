import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const DatePickerElement = ({open, setOpen}) => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setDate(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DatePickerElement;
