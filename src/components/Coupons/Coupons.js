import React, { useState, useEffect } from 'react';
import { getCoupons } from '../../api/api';

const Coupons = () => {
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
    <div>
      <h2>Coupons</h2>
      <ul>
        {coupons.map(coupon => (
          <li key={coupon._id}>{coupon.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Coupons;
