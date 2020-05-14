import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TestReactDatePicker = () => {
  const [date, setdate] = useState(null);

  return (
    <DatePicker
      selected={date}
      onChange={date => setdate(date)}
      dateFormat="dd/MM/yyyy"
      isClearable
      filterDate={date => date.getDay() !== 0 && date.getDay() !== 6}
      showYearDropdown
      showMonthDropdown
    />
  );
};

export default TestReactDatePicker;
