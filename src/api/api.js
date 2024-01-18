import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS,
});

export const getCoupons = async () => {
  try {
    const response = await api.get("/coupons");
    return response.data;
  } catch (error) {
    console.error("Error fetching coupons:", error);
    throw error;
  }
};

export const checkCoupon = async (couponId, code) => {
  try {
    const response = await api.post("/coupons/check", { coupon_id: couponId, code });
    return response.data;
  } catch (error) {
    console.error("Error checking coupon:", error);
    throw error;
  }
};
