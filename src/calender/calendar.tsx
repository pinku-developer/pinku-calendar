import React, { useState } from 'react';
import moment from 'moment';
import './style.scss';

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const currentMonth = moment(selectedDate).month();
  const currentYear = moment(selectedDate).year();
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const daysInMonth = moment(selectedDate).daysInMonth();
  const firstDayOfMonth = moment(selectedDate)
    .startOf('month')
    .day();

  return (
    <div className="calendar">
      <div className="calendar-header">
        {moment(selectedDate).format('MMMM YYYY')}
      </div>
      <div className="calendar-body">
        <div className="days-of-week">
          {daysOfWeek.map((day) => (
            <div className="day-of-week" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className="dates">
          {Array(daysInMonth + firstDayOfMonth)
            .fill(null)
            .map((elem, index) => {
              const day = index - firstDayOfMonth + 1;
              const isCurrentMonth = moment([currentYear, currentMonth, day]).month() === currentMonth;
              const isSelectedDate =
                moment([currentYear, currentMonth, day]).isSame(selectedDate, 'day');

              return (
                <div data-testid="date"
                  className={`date ${
                    isCurrentMonth ? '' : 'not-current-month'
                  } ${isSelectedDate ? 'selected' : ''}`}
                  key={`${firstDayOfMonth}_${currentMonth}_${Math.random()}`}
                >
                  {isCurrentMonth ? day : ''}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
