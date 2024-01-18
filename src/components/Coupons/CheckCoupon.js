import React, { useState } from 'react';
import { checkCoupon } from '../../api/api';

const CheckCoupon = () => {
  const [couponId, setCouponId] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await checkCoupon(couponId, code);
      setMessage(response.message);
    } catch (error) {
      setMessage('Error checking coupon.');
    }
  };

  return (
    <div>
      <h2>Check Coupon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={couponId}
          onChange={(e) => setCouponId(e.target.value)}
          placeholder="Coupon ID"
        />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Coupon Code"
        />
        <button type="submit">Check Coupon</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CheckCoupon;
