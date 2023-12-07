import { useState } from 'react'
import emailIcon from '../../assets/icon-email-setting.svg'
import passIcon from '../../assets/icon-pass-setting.svg'

const Security = () => {
    const [account, setAccount] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setAccount({ ...account, [name]: value })
    }
    return (
        <div className="flex flex-col gap-11">
            <div className={`flex flex-row items-center m-auto px-4 gap-2 h-16 rounded-lg w-full focus-within:border-cloud-burst-500 border ${account.email !== '' && 'border-cloud-burst-500 border'}`}>
                <div>
                    <img src={emailIcon} alt="" />
                </div>
                <div className="flex flex-col w-full relative">
                    <label className="relative cursor-pointer mt-1">
                        <input type="email"
                            id='inpt-setting-email'
                            name='email'
                            value={account.email}
                            onChange={handleChange}
                            className="focus:outline-none focus:ring-0 border border-none transition duration-200 placeholder-opacity-0 placeholder-gray-300"
                            placeholder="Email" />
                        <span className='absolute left-0 transition duration-200 label-input'>Email</span>
                    </label>

                </div>
            </div>
            <div className={`flex flex-row items-center m-auto px-4 gap-2 h-16 rounded-lg w-full focus-within:border-cloud-burst-500 border ${account.password !== '' && 'border-cloud-burst-500 border'}`}>
                <div>
                    <img src={passIcon} alt="" />
                </div>
                <div className="flex flex-col w-full relative">
                    <label className="relative cursor-pointer mt-1">
                        <input type="password"
                            name='password'
                            value={account.password}
                            id='inpt-setting-secure-password'
                            onChange={handleChange}
                            className="focus:outline-none focus:ring-0 border border-none transition duration-200 placeholder-opacity-0 placeholder-gray-300"
                            placeholder="" />
                        <span className='absolute left-0 transition duration-200 label-input'>Password</span>
                    </label>
                </div>
            </div>
            <div className="flex justify-start">
                <button id="save-security-setting"
                    className="bg-crusta-500 text-white flex justify-center items-center h-10 w-72 rounded-lg hover:bg-crusta-600">
                    Simpan
                </button>
            </div>
        </div>
    )
}

export default Security