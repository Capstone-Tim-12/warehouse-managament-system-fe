import BackgroundImage from '../../assets/rect-bg.svg'
import AboutUsImage from '../../assets/about-us-img.svg'

const AboutUs = () => {
    return (
        <div className="py-40 px-24">
            <div className="relative">
                <img className="absolute bottom-[-128px] right-[-300px]" style={{ zIndex: '-1' }}
                    src={BackgroundImage} alt="Background Image" />
            </div>
            <div className="bg-cloud-burst-500 grid grid-col rounded-2xl">
                <div className="flex flex-col gap-[55px] p-[95px]">
                    <div className="flex flex-row items-center w-full gap-2">
                        <div className="w-full max-w-[100px] h-1 bg-white" />
                        <h1 className="text-center text-white text-[28px] md:text-[38px] lg:text-[48px] font-bold">
                            Tentang Kami
                        </h1>
                    </div>
                    <p className="text-white max-w-[550px] text-xl text-justify">
                        DigiHouse merupakan aplikasi yang memberikan layanan kepada pengguna untuk dapat mencari, menyewa, dan mengelola penyewaan gudang atau ruang penyimpanan tambahan. Aplikasi ini dapat digunakan oleh berbagai kelompok pengguna, mulai dari individu, pemilik usaha kecil, hingga perusahaan besar yang membutuhkan tempat untuk menyimpan barang atau inventaris mereka
                    </p>
                </div>
                <div>
                    <div className="relative">
                        <img className="absolute bottom-0 right-0" src={AboutUsImage} alt="About Us Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs