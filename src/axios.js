import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4f567.cloudfunctions.net/api", // THE API (cloud function) URL
});

export default instance;

// https://us-central1-clone-4f567.cloudfunctions.net/api
// http://localhost:5001/challenge-d9ed3/us-central1/api
