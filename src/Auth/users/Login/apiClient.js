import axios from "axios";
import { API_URL } from "../../../Constant/constants";

export default class LoginApiClient {
  constructor() {
    this.base_url = API_URL;
  }
  async request(values, user_group) {
    try {
      const response = await axios({
        method: "post",
        url: `${this.base_url}/accounts/${user_group}/login`,
        data: values,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
