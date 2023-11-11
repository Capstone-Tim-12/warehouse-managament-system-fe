import arrowDownLeft from "../../assets/arrow-down-left.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";

const TransactionDashboard = () => {
  return (
    <div className="mx-3 bg-white p-3">
      <h4 className="text-[20px] font-bold">Transaction</h4>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              <div className="flex items-center">
                <p className="text-indigo-600 font-bold">X</p>
              </div>
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium">
              Miftaqul Fauzi to me
            </td>
            <td className="py-3 px-4">
              <button className="bg-[#10b981] text-black px-6 py-2 rounded-full pointer-events-none">
                Success
              </button>
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium">
              Rp1.700.00,00
            </td>
            <td className="py-3 px-4">
              <img
                src={arrowDownLeft}
                alt="arrow down left icon"
                className="h-6 w-6"
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              <div className="flex items-center">
                <p className="text-indigo-600 font-bold">X</p>
              </div>
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium">
              Miftaqul Fauzi to me
            </td>
            <td className="py-3 px-4">
              <button className="bg-[#10b981] text-black px-6 py-2 rounded-full pointer-events-none">
                Success
              </button>
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium">
              Rp1.700.00,00
            </td>
            <td className="py-3 px-4">
              <img
                src={arrowDownLeft}
                alt="arrow down left icon"
                className="h-6 w-6"
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              <div className="flex items-center">
                <p className="text-indigo-600 font-bold">X</p>
              </div>
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium">
              Miftaqul Fauzi to me
            </td>
            <td className="py-3 px-4">
              <button className="bg-[#10b981] text-black px-6 py-2 rounded-full pointer-events-none">
                Success
              </button>
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium">
              Rp1.700.00,00
            </td>
            <td className="py-3 px-4">
              <img
                src={arrowDownLeft}
                alt="arrow down left icon"
                className="h-6 w-6"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="flex items-center gap-5 m-3">
        See More
        <img src={rightArrowIcon} alt="right arrow" />
      </button>
    </div>
  );
};
export default TransactionDashboard;
