const { default: axios } = require("axios");

const axiosInstence = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://dua-ruqyah-production.up.railway.app",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

export default axiosInstence;
