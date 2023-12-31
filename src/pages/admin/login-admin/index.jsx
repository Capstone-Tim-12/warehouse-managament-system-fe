import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../../features/authSlice";
import { notification } from "antd";

import Logo from "../../../assets/logo.svg";
import Icon1 from "../../../assets/icon1-login-admin.svg";
import Icon2 from "../../../assets/icon2-login-admin.svg";
import Icon3 from "../../../assets/icon-email-setting.svg";
import Icon4 from "../../../assets/icon4-login-admin.svg";
import Icon5 from "../../../assets/icon5-login-admin.svg";
import Icon6 from "../../../assets/icon6-login-admin.svg";
import Eye from "../../../assets/eye-icon.svg";

function LoginForm() {
  const dispatch = useDispatch();
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorInvalid, setErrorInvalid] = useState("");
  const navigate = useNavigate();

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setUsernameFocused(false);
    validateEmail();
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
    validatePassword();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Masukkan Email !");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Masukkan Password !");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      validateEmail();
      validatePassword();
      return;
    }

    axios
      .post("https://digiwarehouse-app.onrender.com/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const user = response?.data?.data;

        if (user && user.role === "admin") {
          const token = user.token;
          dispatch(setToken(token));
          const name = user.name;
          Cookies.set("name", name, { path: "/" });
          navigate("/admin/dashboard");
        } else {
          notification.warning({
            message: <div className="font-bold">Informasi</div>,
            description: (
              <div className="font-semibold">
                Anda tidak memiliki izin untuk masuk sebagai admin
              </div>
            ),
            placement: "top",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          const status = error.response.status;

          if (status === 400 || status === 404) {
            setErrorInvalid("Email atau Password tidak valid !");
          } else {
            console.log("Terjadi kesalahan pada server");
          }
        } else {
          console.log("Terjadi kesalahan");
        }
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cloud-burst-500">
      <div className="flex items-center">
        <img
          src={Icon1}
          alt="Icon1"
          className="absolute top-0 left-0 w-36 h-36"
        />
        <img src={Logo} alt="Logo" className="w-12 h-12 mr-2" />
        <h2 className="text-3xl font-bold text-white mt-3">
          <span className="text-crusta-500">Digi</span>House
        </h2>
      </div>

      <p className="text-white font-reguler mt-6">
        Selamat datang di halaman admin
      </p>

      <form onSubmit={handleLogin} className="p-10 mt-9">
        <div className="mb-4 relative">
          <label
            htmlFor="username"
            className={`absolute left-0 pl-[22px] flex items-center `}
          >
            <img src={Icon3} alt="Icon3" className="w-5 h-5 mr-2 mt-[20px]" />
            <p
              className={`${
                usernameFocused || email
                  ? "font-semibold text-cloud-burst-500 -translate-y-0.5"
                  : "font-semibold text-cloud-burst-500 pt-4"
              }`}
            >
              Email
            </p>
          </label>
          <input
            type="email"
            id="username"
            name="email"
            value={email}
            className={`w-[300px] sm:w-[421px] md:w-[421px] h-[57px] pl-[50px] pr-14 pt-7 text-[#2C2C2E] border ${
              errorInvalid || emailError ? "border-red-600" : ""
            } rounded-md focus:outline-none focus:border-blue-400 focus:ring-0`}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError && <p className="text-red-400">{emailError}</p>}
        </div>

        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className={`absolute left-0 pl-[22px] flex items-center`}
          >
            <img src={Icon4} alt="Icon4" className="w-5 h-5 mr-2 mt-[20px]" />
            <p
              className={`${
                passwordFocused || password
                  ? "font-semibold text-cloud-burst-500 -translate-y-0.5"
                  : "font-semibold text-cloud-burst-500 pt-4"
              }`}
            >
              Password
            </p>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            className={`w-[300px] sm:w-[421px] md:w-[421px] h-[57px] pl-[50px] pr-14 pt-7 text-[#2C2C2E] border ${
              errorInvalid || passwordError ? "border-red-600" : ""
            } rounded-md focus:outline-none focus:border-blue-400 focus:ring-0`}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {password && (
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <img
                src={Eye}
                alt="Toggle Password Visibility"
                className="w-5 h-5"
              />
            </div>
          )}
          {passwordError && <p className="text-red-400">{passwordError}</p>}
          {errorInvalid && <p className="text-red-400">{errorInvalid}</p>}
        </div>

        <div className="flex justify-between">
          <button
            id="reset"
            type="button"
            className="w-1/2 bg-crusta-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-crusta-600 transition duration-300 mr-2 flex justify-center"
            onClick={() => {
              setEmail(""), setPassword("");
            }}
          >
            <img src={Icon5} alt="Icon5" className="w-6 h-6 mr-3 " />
            Reset
          </button>

          <button
            id="login"
            type="submit"
            className="w-1/2 bg-crusta-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-crusta-600 ml-2 flex justify-center"
          >
            <img src={Icon6} alt="Icon6" className="w-6 h-6 mr-3" />
            Login
          </button>
        </div>
      </form>

      <img
        src={Icon2}
        alt="Icon2"
        className="absolute bottom-0 right-0 w-36 h-36"
      />
    </div>
  );
}

export default LoginForm;
