import React, { useState, useEffect } from "react";
import Calendar from "./Calendar"; // Adjust the import path as needed
import { getTypes } from "../../api/api";

const CalendarWithCoupons = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const data = await getTypes();
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
