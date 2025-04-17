const { default: axios } = require("axios");

const axiosInstence = axios.create({
  baseURL: "http://localhost:3000",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

export default axiosInstence;
