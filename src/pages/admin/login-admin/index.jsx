import { useState } from 'react';
import Logo from "../../../assets/logo.svg";
import Icon1 from "../../../assets/icon1-login-admin.svg";
import Icon2 from "../../../assets/icon2-login-admin.svg";
import Icon3 from "../../../assets/icon3-login-admin.svg";
import Icon4 from "../../../assets/icon4-login-admin.svg";
import Icon5 from "../../../assets/icon5-login-admin.svg";
import Icon6 from "../../../assets/icon6-login-admin.svg";
import Eye from "../../../assets/eye-icon.svg";

function LoginForm() {
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');

    const handleUsernameFocus = () => {
        setUsernameFocused(true);
    };

    const handleUsernameBlur = () => {
        setUsernameFocused(false);
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        setPasswordFocused(false);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-cloud-burst-500">
            <div className="flex items-center">
                <img src={Icon1} alt="Icon1" className="absolute top-0 left-0 w-36 h-36" />
                <img src={Logo} alt="Logo" className="w-12 h-12 mr-2" />
                <h2 className="text-3xl font-bold text-white mt-3">
                    <span className="text-crusta-500">Digi</span>House
                </h2>
            </div>

            <p className="text-white font-reguler mt-6">Selamat datang di halaman admin</p>

            <form className="p-10 mt-9">
                <div className="mb-4 relative">
                    <label
                        htmlFor="username"
                        className={`absolute left-0 pl-[22px] flex items-center ${usernameFocused ? 'text-semibold text-cloud-burst-500 -translate-y-2' : ''}`}
                    >
                        <img src={Icon3} alt="Icon3" className="w-5 h-5 mr-2 mt-[20px]" />
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-[421px] h-[57px] pl-[50px] pr-14 pt-[30px] border rounded-md focus:outline-none focus:border-blue-400 focus:ring-0"
                        onFocus={handleUsernameFocus}
                        onBlur={handleUsernameBlur}
                    />
                </div>

                <div className="mb-4 relative">
                    <label
                        htmlFor="password"
                        className={`absolute left-0 pl-[22px] flex items-center ${passwordFocused ? 'text-semibold text-cloud-burst-500 -translate-y-2' : ''}`}
                    >
                        <img src={Icon4} alt="Icon4" className="w-5 h-5 mr-2 mt-[20px]" />
                        Password
                    </label>

                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={passwordValue}
                        onChange={handlePasswordChange}
                        className="w-[421px] h-[57px] pl-[50px] pr-14 pt-[30px] border rounded-md focus:outline-none focus:border-blue-400 focus:ring-0"
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                    />
                    {passwordValue && (
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
                </div>

                <div className="flex justify-between">
                    <button type="button" className="w-1/2 bg-crusta-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-crusta-600 transition duration-300 mr-2 flex justify-center">
                        <img src={Icon5} alt="Icon5" className="w-6 h-6 mr-3 " />
                        Hapus
                    </button>

                    <button type="submit" className="w-1/2 bg-crusta-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-crusta-600 ml-2 flex justify-center">
                        <img src={Icon6} alt="Icon6" className="w-6 h-6 mr-3" />
                        Login
                    </button>
                </div>
            </form>

            <img src={Icon2} alt="Icon2" className="absolute bottom-0 right-0 w-36 h-36" />
        </div>
    );
}

export default LoginForm;
