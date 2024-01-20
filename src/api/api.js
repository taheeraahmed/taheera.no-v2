import axios from "axios";

const API_BASE_URL = "https://backend-taheera-no-git-master-taheeras-projects.vercel.app/api";
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
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching types:", error);
    throw error;
  }
};

export const getCouponById = async (id) => {
  try {
    const response = await api.get(`/api/coupons/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching coupon with ID:", id, error);
    throw error;
  }
};