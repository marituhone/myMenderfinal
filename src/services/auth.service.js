import { postRequest } from "./api";

export const login = (identification_number, password) => {
  const endpoint = "auth/login";
  const data = { identification_number, password };
  return postRequest(endpoint, data)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = (identification_number, first_name, last_name, email, password, password2) => {
  const endpoint = "auth/register_user/";
  const data = { identification_number, first_name, last_name, email, password, password2 };
  return postRequest(endpoint, data)
    .then((response) => {
      return response.data;
    });
};
