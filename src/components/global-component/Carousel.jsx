import Slider from "react-slick";
import avatar1 from "../../assets/avatar-1.svg"
import avatar2 from "../../assets/avatar-2.svg"

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="bg-white rounded-lg max-w-4xl">
            <Slider {...settings}>
                <div className="!flex flex-col justify-center items-center p-12">
                    <p className="mb-2 text-xl">Fitur perpesanan dalam aplikasi memastikan komunikasi lancar dan transparan. Ini adalah solusi terpadu yang menghemat waktu, menawarkan kenyamanan, dan menyediakan akses ke berbagai pilihan gudang.</p>
                    <img className="my-5" src={avatar1} alt="Avatar 1" />
                    <p className="font-semibold text-lg">Rio Dewanto</p>
                    <p className="text-crusta-500 text-lg">Jakarta, Indonesia</p>
                </div>
                <div className="!flex flex-col justify-center items-center p-12">
                    <p className="mb-2 text-xl">It has simplified my warehouse rental process and reduced my operational costs. This saves me so much time compared to the traditional way of searching for warehouse spaces.</p>
                    <img className="my-5" src={avatar2} alt="Avatar 2" />
                    <p className="font-semibold text-lg">Nicholas Saputra</p>
                    <p className="text-crusta-500 text-lg">Jakarta Indonesia</p>
                </div>
            </Slider>
        </div>
    );
}


export default Carousel
