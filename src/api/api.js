import axios from "axios";

const API_BASE_URL = "https://dev-backend-taheera-no.vercel.app/api";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS,
});

export const getTypes = async () => {
  try {
    const response = await api.get("/types");
        return response.data;
  } catch (error) {
    console.error("Error fetching types:", error);
    throw error;
  }
};

export const getCouponById = async (id) => {
  try {
    const response = await api.get(`/coupons/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching coupon with ID:", id, error);
    throw error;
  }
};