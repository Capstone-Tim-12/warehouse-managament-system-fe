import BackgroundImage from '../../assets/rect-bg.svg'
import AboutUsImage from '../../assets/about-us-img.svg'

const AboutUs = () => {
    return (
        <div className="py-10 px-6 md:py-20 md:px-12 lg:py-40 lg:px-24">
            <div className='max-w-screen-xl w-full m-auto'>
                <div className="relative">
                    <img className="absolute hidden lg:block bottom-[-128px] right-[-300px]" style={{ zIndex: '-1' }}
                        src={BackgroundImage} alt="Background Image" />
                </div>
                <div className="bg-cloud-burst-500 grid grid-cols-1 lg:grid-cols-2 rounded-2xl">
                    <div className="flex flex-col gap-[55px] p-8 md:p-12 lg:pr-0 lg:p-24">
                        <div className="flex flex-row items-center w-full gap-2">
                            <div className="w-full max-w-[100px] h-1 bg-white" />
                            <h1 className="text-center text-white text-[28px] md:text-[38px] lg:text-[48px] font-bold">
                                Tentang Kami
                            </h1>
                        </div>
                        <p className="text-white max-w-[550px] text-xl text-left lg:text-justify">
                            DigiHouse merupakan aplikasi yang memberikan layanan kepada pengguna untuk dapat mencari, menyewa, dan mengelola penyewaan gudang atau ruang penyimpanan tambahan. Aplikasi ini dapat digunakan oleh berbagai kelompok pengguna, mulai dari individu, pemilik usaha kecil, hingga perusahaan besar yang membutuhkan tempat untuk menyimpan barang atau inventaris mereka
                        </p>
                    </div>
                    <div className="relative">
                        <img className="absolute hidden lg:block bottom-0 right-0" src={AboutUsImage} alt="About Us Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs