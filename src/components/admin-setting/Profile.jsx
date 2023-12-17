import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import userIcon from '../../assets/user-setting-icon.svg'
import emailIcon from '../../assets/icon-email-setting.svg'
import passIcon from '../../assets/icon-pass-setting.svg'
import Eye from "../../assets/eye-icon.svg";
import EyeSlash from "../../assets/eye-slash-icon.svg";

import { getToken } from '../../utils/Token'
import Popup from '../global-component/Popup'

const endpointGet = 'https://digiwarehouse-app.onrender.com/user/profile'
const endpointUpdate = 'https://digiwarehouse-app.onrender.com/dasboard/user/setting'

const headers = {
  Authorization: `Bearer ${getToken()}`
}

const Profile = () => {
  const [isLoading, setLoading] = useState(true)
  const [isUpdating, setUpdating] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    axios.get(endpointGet, { headers })
      .then((res) => {
        const { data } = res
        setProfile({
          username: data.data.username,
          email: data.data.email,
          password: data.data.password,
        })
      })
      .catch((err) => {
        if (err.response.status === 401) navigate("/admin/login-admin")
        else console.err('[ERR_FETCH_DETAIL_USER]: ' + err)
      })
      .finally(() => setLoading(false))
  }, [navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    setUpdating(true)
    axios.put(endpointUpdate, profile, { headers })
      .then(() => alert('SUCCESS UPDATE USER'))
      .catch((err) => {
        if (err.response.status === 401) navigate("/admin/login-admin")
        else console.err('[ERR_SUBMIT_UPDATE_USER]: ' + err)
      })
      .finally(() => {
        setUpdating(false)
        setIsPasswordError(false)
        setShowPassword(false)
      })
  }

  const validate = (e) => {
    e.preventDefault();

    return !profile.password
      ? setIsPasswordError(true)
      : handleSubmit()
  };

  useEffect(() => {
    setIsPasswordError((isPasswordError && !profile.password))
  }, [profile.password, isPasswordError])

  if (isLoading) return <p>Memuat data...</p>

  return (
    <div className='flex flex-col gap-11'>
      <Popup open={isUpdating} />
      <div className={`flex flex-row items-center m-auto px-4 gap-2 h-16 rounded-lg w-full focus-within:border-cloud-burst-500 border ${profile.username !== '' && 'border-cloud-burst-500 border'}`}>
        <div>
          <img src={userIcon} alt='' />
        </div>
        <div className='flex flex-col w-full relative'>
          <label className='relative cursor-pointer mt-1'>
            <input
              id='inpt-setting-username'
              name='username'
              value={profile.username || ''}
              onChange={handleChange}
              type='text'
              placeholder='Nama'
              className='focus:outline-none border focus:ring-0 border-none transition duration-200 placeholder-opacity-0 placeholder-gray-300'
            />
            <span className='absolute left-0 transition duration-200 label-input'>Nama</span>
          </label>
        </div>
      </div>
      <div className={`flex flex-row items-center m-auto px-4 gap-2 h-16 rounded-lg w-full focus-within:border-cloud-burst-500 border ${profile.email !== '' && 'border-cloud-burst-500 border'}`}>
        <div>
          <img src={emailIcon} alt='' />
        </div>
        <div className='flex flex-col w-full relative'>
          <label className='relative cursor-pointer mt-1'>
            <input
              id='inpt-setting-email'
              name='email'
              value={profile.email || ''}
              onChange={handleChange}
              placeholder='Email'
              type='email'
              className='focus:outline-none border focus:ring-0 border-none transition duration-200 placeholder-opacity-0 placeholder-gray-300'
            />
            <span className='absolute left-0 transition duration-200 label-input'>Email</span>
          </label>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className={`flex flex-row items-center m-auto px-4 gap-2 h-16 rounded-lg w-full focus-within:border-cloud-burst-500 border ${profile.password !== '' && 'border-cloud-burst-500 border'}`}>
          <div>
            <img src={passIcon} alt='' />
          </div>
          <div className='flex flex-col w-full relative'>
            <label className='relative cursor-pointer mt-1'>
              <input
                id='inpt-setting-secure-password'
                name='password'
                value={profile.password || ''}
                onChange={handleChange}
                placeholder=''
                type={showPassword ? "text" : "password"}
                className='focus:outline-none focus:ring-0 border border-none transition duration-200 placeholder-opacity-0 placeholder-gray-300'
              />
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={showPassword ? EyeSlash : Eye}
                  alt="Toggle Password Visibility"
                  className="w-5 h-5"
                />
              </div>
              <span className='absolute left-0 transition duration-200 label-input'>Password</span>
            </label>
          </div>
        </div>
        <p className="text-red-400">{isPasswordError && 'Masukkan Password!'}</p>
      </div>
      <div className='flex justify-end'>
        <button
          id='save-profile-setting'
          data-modal-target="popup-loading"
          data-modal-toggle="popup-loading"
          disabled={isUpdating || isPasswordError}
          onClick={validate}
          className={`bg-crusta-500 text-white flex justify-center items-center h-10 w-72 rounded-lg hover:bg-crusta-600 ${isUpdating || isPasswordError && 'bg-crusta-500 opacity-50 cursor-not-allowed'}`}
        >
          Simpan
        </button>
      </div>
    </div>
  )
}

export default Profile