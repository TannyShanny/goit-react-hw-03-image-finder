import axios from "axios";

const KEY = "19062217-5acbcbc5cf1ddb062c8ac3a1e";
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=`;

export const getImage = (query = "", page = 1) =>
  axios.get(`${BASE_URL}+${query}&page=${page}&per_page=12&key=${KEY}`);
