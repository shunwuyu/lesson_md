import axios from "axios";
const API_URL = "http://localhost:8081/api/auth/";

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            // console.log(response.data, '/////');
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
}

const AuthService = {
    login,
}

export default AuthService;