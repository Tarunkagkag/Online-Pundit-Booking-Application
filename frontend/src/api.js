// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api", 
// });



// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export default API;
import axios from "axios";

// Use environment variable for backend URL
const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`, // ← live backend
});

// Attach token from localStorage if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
