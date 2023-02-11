import React from 'react';
import { render, cleanup } from '@testing-library/react';
import moment from 'moment';
import Calendar from './calendar';

afterEach(cleanup);

describe('Calendar', () => {
  it('renders the correct month and year in the header', () => {
    const date = new Date(2022, 5, 1);
    const { getByText } = render(<Calendar date={date} />);
    const header = getByText('June 2022');
    expect(header).toBeInTheDocument();
  });

  it('renders the correct number of days in the month', () => {
    const date = new Date(2022, 5, 1);
    const { getAllByTestId } = render(<Calendar date={date} />);
    const dates = getAllByTestId('date');
    expect(dates.length).toBe(33);
  });

  it('renders the first day of the month with the correct day of the week', () => {
    const date = new Date(2022, 5, 1);
    const { getByText } = render(<Calendar date={date} />);
    const firstDate = getByText('1');
    const firstDayOfWeek = getByText('We');
    expect(firstDate).toBeInTheDocument();
    expect(firstDayOfWeek).toBeInTheDocument();
  });

  it('renders the last day of the month with the correct day of the week', () => {
    const date = new Date(2022, 5, 1);
    const { getByText } = render(<Calendar date={date} />);
    const lastDate = getByText('30');
    const lastDayOfWeek = getByText('Fr');
    expect(lastDate).toBeInTheDocument();
    expect(lastDayOfWeek).toBeInTheDocument();
  });

  it('marks the selected date as selected', () => {
    const date = new Date(2022, 5, 15);
    const { getByText } = render(<Calendar date={date} />);
    const selectedDate = getByText('15');
    expect(selectedDate).toHaveClass('selected');
  });

});
