import React from "react";
import CalendarWithCoupons from "../../components/Coupons/Coupons";
import "./calendar.scss";

const CouponView = () => {
  return (
    <div className="calendar">
      <h1>30 dager med Andre</h1>
      <CalendarWithCoupons />
      <br />
      <br />
    </div>
  );
};

export default CouponView;
