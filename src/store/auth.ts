import { defineStore } from "pinia";
import Auth from "@/api/auth";
import type { AxiosResponse } from "axios";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

type loginData = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  const userToken = ref<string>();
  const accessToken = computed(() => userToken.value);
  const router = useRouter();
  let userName = ref("");
  const loggedIn = ref(false);
  const getLoggedin = () => {
    const userToken = ref(localStorage.getItem("accessToken") || "");
    // console.log("userToken.value: ", userToken.value);
    if (userToken.value === "") {
      loggedIn.value = false;
    } else {
      loggedIn.value = true;
    }
    console.log("loggedIn.value: ", loggedIn.value);
    return loggedIn.value;
  };

  // 登入
  async function login(loginData: loginData) {
    const { email, password } = loginData;
    const result = (await Auth.apiPostLogin({
      email: email.trim(),
      password,
    })) as AxiosResponse;
    if (result.data) {
      const { token } = result.data.data;
      console.log("result.data.data.name :", result.data.data.name);
      userToken.value = token;
      // localStorage 存進 accessToken
      if (token) {
        localStorage.setItem("accessToken", token);
        setUserName(result.data.data.name);
      }
      return result.data;
    } else {
      console.log("error.response.status=>", result);
      alert("帳號密碼錯誤，請重新輸入");
      throw new Error("Failed to authenticate. Check your login data.");
    }
  }
  function getAccessToken() {
    if (localStorage.getItem("accessToken")) {
      userToken.value = localStorage.getItem("accessToken") || "";
    }
  }

  function setUserName(name: string) {
    userName.value = name;
    localStorage.setItem("userName", name);
  }
  function getUserName() {
    if (localStorage.getItem("userName")) {
      userName.value = localStorage.getItem("userName") || "";
    } else {
      userName = ref("請登入");
    }
    return userName;
  }

  function logout() {
    userToken.value = "";
    localStorage.setItem("accessToken", "");
    localStorage.setItem("userName", "");
    router.push("/login");
  }

  return {
    login,
    logout,
    accessToken,
    getAccessToken,
    setUserName,
    getUserName,
    getLoggedin,
  };
});
