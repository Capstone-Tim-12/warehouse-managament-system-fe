import userIcon from '../../assets/user-setting-icon.svg'
import emailIcon from '../../assets/icon-email-setting.svg'
import { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        user: '',
        email: '',
        address: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfile({ ...profile, [name]: value })
    }
    return (
        <div className="flex flex-col gap-11">
            <div className={`flex flex-row items-center m-auto py-2 px-4 gap-2 rounded-lg w-full focus-within:border-cloud-burst-500 border ${profile.user !== '' && 'border-cloud-burst-500 border'}`}>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="name" className="text-xs">Name</label>
                    <input type="text"
                        id='inpt-setting-username'
                        name='user'
                        value={profile.user}
                        onChange={handleChange}
                        className="focus:outline-none border border-none focus:ring-0 "
                        placeholder="" />
                </div>
            </div>
            <div className={`flex flex-row items-center m-auto py-2 px-4 gap-2 rounded-lg w-full focus-within:border-cloud-burst-500 border ${profile.email !== '' && 'border-cloud-burst-500 border'}`}>
                <div>
                    <img src={emailIcon} alt="" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="text-xs">Email</label>
                    <input type="email"
                    id='inpt-setting-email'
                        name='email'
                        value={profile.email}
                        onChange={handleChange}
                        className="focus:outline-none"
                        placeholder="" />
                </div>
            </div>
            <div className={`flex flex-row items-center m-auto py-2 px-4 gap-2 rounded-lg w-full focus-within:border-cloud-burst-500 border ${profile.address !== '' && 'border-cloud-burst-500 border'}`}>
                <textarea
                    name="address"
                    id="inptSettingAddress"
                    value={profile.address}
                    onChange={handleChange}
                    placeholder="Alamat"
                    className="px-4 py-2 w-full h-full focus:outline-none rounded-lg"></textarea>
            </div>
            <div className="flex justify-start">
                <button id="save-profile-setting"
                    className="bg-crusta-500 text-white flex justify-center items-center h-10 w-72 rounded-lg hover:bg-crusta-600">
                    Simpan
                </button>
            </div>
        </div>
    )
}

export default Profile