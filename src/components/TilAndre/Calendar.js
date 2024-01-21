import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AlertDialog from "./Dialog";
import "./styles.css";
const Calendar = ({ coupons }) => {
  const startDate = new Date(2024, 1, 12);
  const endDate = new Date(2024, 2, 15);
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const renderCoupons = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if the date is February 13th or 14th
    if (
      date.getMonth() === 1 &&
      (date.getDate() === 13 || date.getDate() === 14 || date.getDate() === 12)
    ) {
      return null; // Return nothing for these dates
    }

    /* if (date >= today) {
      return <span className="shake">❓❓</span>;
    }
   */
    return coupons
      .filter((coupon) => {
        const availableDate = new Date(coupon.available_date * 1000);
        return availableDate.toDateString() === date.toDateString();
      })
      .map((coupon) => (
        <>
          {coupon.type ? (
            <AlertDialog coupon={coupon} />
          ) : (
            <span className="shake">❓❓</span>
          )}
        </>
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
          <Typography variant="h4" style={{ color: "white" }}>
            {day}
          </Typography>
        </Grid>
      ))}
      {weeks.map((week, index) => (
        <React.Fragment key={index}>
          {week.map((day, idx) => (
            <Grid item xs={12 / 7} key={idx} style={{ height: "17vh" }}>
              {day ? (
                <Paper
                elevation={1}
                className={
                  day.getMonth() === 2 && day.getDate() === 15
                    ? "specialStyleForMarch15"
                    : ""
                }
                style={{
                  position: 'relative', // Added for absolute positioning of the coupon
                  padding: "3px",
                  textAlign: "center",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)", // for webkit browsers
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.17)",
                }}
              >
                <div style={{ textAlign: 'center', width: '100%' }}>
                  <Typography
                    variant="body2"
                    style={{
                      paddingBottom: "5px",
                      paddingTop: "5px",
                      marginTop: "5px",
                      color: "white",
                      background: "rgba(255,255,255, 0.2)",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      fontSize: "9pt",
                      display: 'inline-block', // Ensures the text aligns center in its container
                    }}
                  >
                    {day.getDate()}
                  </Typography>
                </div>
              
                <div
                  style={{
                    position: 'absolute', 
                    top: '25px', // Adjust based on the height of the Typography
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                  }}
                >
                  {renderCoupons(day)}
                </div>
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
