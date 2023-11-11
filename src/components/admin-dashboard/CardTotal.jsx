import manageGudangIcon from "../../assets/manage-gudang-icon.svg";
import transaksiIcon from "../../assets/transaksi-icon.svg";

const CardTotal = () => {
  return (
    <div id="card-wrapper" className="grid grid-cols-3 gap-5 mt-[50px] mx-3  ">
      <div className="bg-white py-6 px-5 rounded-[8px]">
        <img src={manageGudangIcon} alt="manage gudang icon" />
        <p className="text-[20px] my-[20px]">Total gudang yang tersedia</p>
        <h3 className="font-bold text-[24px]">231</h3>
      </div>
      <div className="bg-white  py-6 px-5  rounded-[8px]">
        <img src={manageGudangIcon} alt="manage gudang icon" />
        <p className="text-[20px] my-[20px]">Total gudang yang disewa</p>
        <h3 className="font-bold text-[24px]">231</h3>
      </div>
      <div className="bg-white  py-6 px-5  rounded-[8px]">
        <img src={transaksiIcon} alt="transaksi icon" />
        <p className="text-[20px] my-[20px]">Total pendapatan</p>
        <h3 className="font-bold text-[24px]">Rp. 133.000.000</h3>
      </div>
    </div>
  );
};
export default CardTotal;
