import { postRequest } from "./api";

class AuthService {
  login(identification_number, password) {
    const endpoint = "auth/login";
    const data = { identification_number, password };
    return postRequest(endpoint, data)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(identification_number, first_name,last_name,email, password,confirm_password) {
    const endpoint = "auth/register_user";
    const data = { identification_number, identification_number, first_name,last_name,email, password,confirm_password};
    return postRequest(endpoint, data)
    .then((response) => {
      return response.data;
    })

    
  }
}

export default new AuthService();
