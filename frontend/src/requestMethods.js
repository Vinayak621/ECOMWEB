import axios from "axios";
const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjhmNzQzOGFjZDVhMWE1ODU0Y2U5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzc5Njk0OSwiZXhwIjoxNjQ0MDU2MTQ5fQ.rYBaxh0JeN_UGplZxuazVO8-zpss3845AndLDSpJiLs";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN} ` },
});
