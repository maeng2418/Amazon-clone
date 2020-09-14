import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // THE API (cloud function) URL
});

export default instance;

// THE API (cloud function) URL
// https://us-central1-clone-4f567.cloudfunctions.net/api
// http://localhost:5001/challenge-d9ed3/us-central1/api
