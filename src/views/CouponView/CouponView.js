import React from 'react';
import Coupons from '../../components/Coupons/Coupons';
import CheckCoupon from '../../components/Coupons/CheckCoupon';

const CouponView = () => {
  return (
    <div>
      <h1>Coupon Management</h1>
      <Coupons />
      <CheckCoupon />
    </div>
  );
};

export default CouponView;
