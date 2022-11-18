import axios from "axios";

export default axios.create({
  baseURL: "https://633c750b74afaef164097ed9.mockapi.io/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
