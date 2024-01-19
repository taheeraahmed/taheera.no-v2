import React, { useState, useEffect } from "react";
import Calendar from "./Calendar"; // Adjust the import path as needed
import { getCoupons } from "../../api/api";

const CalendarWithCoupons = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const data = await getCoupons();
        setCoupons(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoupons();
  }, []);

  return (
    <>
      <Calendar coupons={coupons} />
    </>
  );
};

export default CalendarWithCoupons;
