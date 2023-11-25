import emailIcon from '../../assets/icon-email-setting.svg'
import passIcon from '../../assets/icon-pass-setting.svg'

const Security = () => {
    return (
        <div className="flex flex-col gap-11">
            <div className="flex flex-row items-center m-auto py-2 px-4 gap-2 border-2 border-crusta-500 rounded-lg w-full">
                <div>
                    <img src={emailIcon} alt="" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="text-xs">Email</label>
                    <input type="text"
                        className="focus:outline-none"
                        placeholder="Elon Musk" />
                </div>
            </div>
            <div className="flex flex-row items-center m-auto py-2 px-4 gap-2 border-2 border-crusta-500 rounded-lg w-full">
                <div>
                    <img src={passIcon} alt="" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="password" className="text-xs">Password</label>
                    <input type="password"
                        className="focus:outline-none"
                        placeholder="Elon Musk" />
                </div>
            </div>
            <div className="flex justify-end">
                <button id="save-profile-setting"
                    className="bg-crusta-500 text-white flex justify-center items-center h-10 w-72 rounded-lg hover:bg-crusta-600">
                    Simpan
                </button>
            </div>
        </div>
    )
}

export default Security