import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Calendar = ({ coupons }) => {
  const startDate = new Date(2024, 1, 12); // February 12, 2024
  const endDate = new Date(2024, 2, 15); // March 15, 2024
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const isFutureDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of the day
    return date > today;
  };

  const renderCoupons = (date) => {
    return coupons
      .filter(coupon => {
        const availableDate = new Date(coupon.available_date * 1000);
        return availableDate.toDateString() === date.toDateString();
      })
      .map(coupon => (
        <Typography key={coupon._id} variant="body2" style={{ marginTop: '0.5em' }}>
          {isFutureDate(new Date(coupon.available_date * 1000)) ? '??' : coupon.title} 
        </Typography>
      ));
  }; // denne vil faile nar man ikke lenger henter alle kuponger uansett dato

  const generateWeeksArray = () => {
    const weeks = [];
    let currentDate = new Date(startDate);
    let week = new Array(7).fill(null);

    // Adjust for the first week's start day
    const startDay = currentDate.getDay();
    const startIndex = startDay === 0 ? 6 : startDay - 1; // Monday is 0, Sunday is 6

    while (currentDate <= endDate) {
      week[startIndex + (currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1)] = new Date(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);

      if (currentDate.getDay() === 1 || currentDate > endDate) {
        weeks.push(week);
        week = new Array(7).fill(null);
      }
    }

    return weeks;
  };

  const weeks = generateWeeksArray();

  return (
    <Grid container spacing={1} style={{ padding: '1em' }}>
      {weekdays.map(day => (
        <Grid item xs={12 / 7} key={day} style={{ textAlign: 'center', padding: '0.5em' }}>
          <Typography variant="h3">{day}</Typography>
        </Grid>
      ))}
      {weeks.map((week, index) => (
        <React.Fragment key={index}>
          {week.map((day, idx) => (
            <Grid item xs={12 / 7} key={idx} style={{ height: '20vh' }}>
              {day ? (
                <Paper elevation={3} style={{ padding: '0.5em', textAlign: 'center', height: '100%' }}>
                  <Typography variant="body1">
                    {day.getDate()}
                  </Typography>
                  {renderCoupons(day)}
                </Paper>
              ) : <div />}
            </Grid>
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Calendar;