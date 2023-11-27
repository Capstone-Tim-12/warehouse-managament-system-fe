import userIcon from '../../assets/user-setting-icon.svg'
import emailIcon from '../../assets/icon-email-setting.svg'

const Profile = () => {
    return (
        <div className="flex flex-col gap-11">
            <div className="flex flex-row items-center m-auto py-2 px-4 gap-2 border border-cloud-burst-500 rounded-lg w-full">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="name" className="text-xs pl-3">Name</label>
                    <input type="text"
                        className="focus:outline-none border border-none focus:ring-0 "
                        placeholder="Elon Musk" />
                </div>
            </div>
            <div className="flex flex-row items-center m-auto py-2 px-4 gap-2 border border-cloud-burst-500 rounded-lg w-full">
                <div>
                    <img src={emailIcon} alt="" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="text-xs pl-3">Email</label>
                    <input type="email"
                        className="focus:outline-none  border border-none focus:ring-0"
                        placeholder="fauzi@example.com" />
                </div>
            </div>
            <div className="m-auto border border-cloud-burst-500 rounded-lg w-full h-28">
                <textarea name="address" id="" placeholder="Alamat" className="px-4 py-2 w-full h-full focus:outline-none rounded-lg  border border-none focus:ring-0"></textarea>
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

export default Profile