import axios from "axios";

export default class Requests {
  constructor() {
    this.url = process.env.REACT_APP_API_BASEURL;
    this.auth = {
      username: process.env.REACT_APP_API_USERNAME,
      password: process.env.REACT_APP_API_PASSWORD,
    };
  }
  async post(endpoint, body) {
    return await axios.post(`${this.url}${endpoint}`, body, {
      auth: this.auth,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async get(endpoint) {
    return await axios.get(`${this.url}${endpoint}`, { auth: this.auth });
  }
}
