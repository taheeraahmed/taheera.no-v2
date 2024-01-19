import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AlertDialog from "./Dialog";

// TODO: Generelt sett gjør småting som gjør at det ser mer sexy ut (add effekter osv)
const Calendar = ({ coupons }) => {
  const startDate = new Date(2024, 1, 12); // February 12, 2024
  const endDate = new Date(2024, 2, 15); // March 15, 2024
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const isFutureDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of the day
    return date > today;
  };

  console.log(coupons);

  const renderCoupons = (date) => {
    return coupons
      .filter((coupon) => {
        const availableDate = new Date(coupon.available_date * 1000);
        return availableDate.toDateString() === date.toDateString();
      })
      .map((coupon) => (
        <>{coupon.type ? <AlertDialog coupon={coupon} /> : <>❓❓</>}</>
      ));
  };

  const generateWeeksArray = () => {
    const weeks = [];
    let currentDate = new Date(startDate);
    let week = new Array(7).fill(null);

    // Adjust for the first week's start day
    const startDay = currentDate.getDay();
    const startIndex = startDay === 0 ? 6 : startDay - 1; // Monday is 0, Sunday is 6

    while (currentDate <= endDate) {
      week[
        startIndex + (currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1)
      ] = new Date(currentDate);
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
    <Grid container spacing={1} style={{ padding: "1em" }}>
      {weekdays.map((day) => (
        <Grid item xs={12 / 7} key={day} style={{ textAlign: "center" }}>
          <Typography variant="h3">{day}</Typography>
        </Grid>
      ))}
      {weeks.map((week, index) => (
        <React.Fragment key={index}>
          {week.map((day, idx) => (
            <Grid item xs={12 / 7} key={idx} style={{ height: "20vh" }}>
              {day ? (
                <Paper
                  elevation={1}
                  style={{
                    padding: "3px",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  {/* TODO: Make a circle around the current date, and gray around the others */}
                  <Typography
                    variant="body2"
                    style={{
                      backgroundColor: "#ff00ff",
                      borderRadius: "3px",
                      paddingBottom: "5px",
                      paddingTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    {day.getDate()}
                  </Typography>
                  {renderCoupons(day)}
                </Paper>
              ) : (
                <div />
              )}
            </Grid>
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Calendar;
