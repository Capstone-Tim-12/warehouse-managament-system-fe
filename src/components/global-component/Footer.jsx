import Logo from "../../assets/logo.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Checklist from "../../assets/checklist.svg";
import Telp from "../../assets/telp.svg";
import Email from "../../assets/email.svg";
import Alamat from "../../assets/alamat.svg";


const Footer = () => {
    return (
        <div className="footer-container bg-cloud-burst-500 text-white">
            <div className="footer-content ">
                <div className="grid grid-cols-3 ">
                    <div className="me-3 mb-3 ">
                        <img
                            src={Logo}
                            alt="Logo"
                            width="80px"
                            height="60px"
                            style={{ verticalAlign: "middle", display: "inline-block" }}
                            className="mb-4"
                        />
                        <h4
                            className="mb-4 font-bold"
                            style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                marginTop: "px",
                            }}
                        >
                            DigiHouse
                        </h4>
                        <p className="mb-4 font-semibold">Sewa Gudang dengan Mudah</p>
                        <p className="mb-4">Akses pengguna 24 jam</p>
                        <div className="icon flex gap-3 mt-3 justify">
                            <a href="">
                                <img src={Instagram} alt="Instagram Icon" />
                            </a>
                            <a href="">
                                <img src={Facebook} alt="Facebook Icon" />
                            </a>
                        </div>
                    </div>
                    <div  style={{ marginTop: '24px' }}>
                        <h2 className="mb-6">Benefit</h2>
                        <div className="checklist-item flex items-center mb-6">
                            <input type="checkbox" id="benefit1" className="hidden" />
                            <label htmlFor="benefit1" className="flex items-center">
                                <img src={Checklist} alt="Checklist Icon" className="mr-3" />
                                Tempat nyaman dan strategis
                            </label>
                        </div>
                        <div className="checklist-item flex items-center mb-6">
                            <input type="checkbox" id="benefit2" className="hidden" />
                            <label htmlFor="benefit2" className="flex items-center">
                                <img src={Checklist} alt="Checklist Icon" className="mr-3" />
                                Keamanan terjaga
                            </label>
                        </div>
                        <div className="checklist-item flex items-center mb-6">
                            <input type="checkbox" id="benefit3" className="hidden" />
                            <label htmlFor="benefit3" className="flex items-center">
                                <img src={Checklist} alt="Checklist Icon" className="mr-3" />
                                Menyediakan ruang banyakMenyediakan ruang banyak
                            </label>
                        </div>
                    </div>
                    <div style={{ marginTop: '24px' }}>
                        <h2 className="mb-6">Contact us</h2>
                        <div className="checklist-item flex items-center mb-6">
                            <input type="checkbox" id="contact1" className="hidden" />
                            <label htmlFor="contact1" className="flex items-center">
                                <img src={Telp} alt="Telp Icon" className="mr-3" />
                                Nomor Telp: 083134422346
                            </label>
                        </div>
                        <div className="checklist-item flex items-center mb-6">
                            <input type="checkbox" id="contact2" className="hidden" />
                            <label htmlFor="contact2" className="flex items-center">
                                <img src={Email} alt="Email Icon" className="mr-3" />
                                Email: digihouse@gmail.com
                            </label>
                        </div>
                        <div className="checklist-item flex items-center mb-6">
                            <input type="checkbox" id="contact3" className="hidden" />
                            <label htmlFor="contact3" className="flex items-center">
                                <img src={Alamat} alt="Alamat Icon" className="mr-3" />
                                Alamat: Jl. Gunawarman No. 21
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright and Logo */}
            <div className="mt-5 mx-5">
                <p style={{ textAlign: "center", fontWeight: "600" }}>
                    &copy; Warehouse Rental App 2023 - All rights reserved
                    <a
                        href="/privacy-policy"
                        style={{
                            marginLeft: "60px",
                            marginRight: "60px",
                            fontWeight: "600",
                        }}
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms-of-service"
                        style={{ marginLeft: "60px", fontWeight: "600" }}
                    >
                        Terms of Service
                    </a>
                </p>
            </div>
        </div>
    );
};


export default Footer;



