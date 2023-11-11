import rightArrowIcon from "../../assets/right-arrow.svg";

const RecentCustomer = () => {
  return (
    <div className="bg-white rounded-[8px] p-3">
      <h3 className="text-[20px] font-bold">Recent Customer</h3>
      <div className="bg-cloud-burst-200 w-full h-auto p-3 rounded-[12px]">
        <div className="flex  items-center gap-4">
          <div className="bg-cloud-burst-500 w-[30px] h-[30px] flex justify-center items-center text-white rounded-full">
            <h5>A</h5>
          </div>
          <div>
            <p>Name</p>
            <p>Email</p>
          </div>
        </div>
      </div>
      <div className="bg-cloud-burst-200 w-full h-auto my-5 p-3 rounded-[12px] ">
        <div className="flex items-center gap-4">
          <div className="bg-cloud-burst-500 w-[30px] h-[30px] flex justify-center items-center text-white rounded-full">
            <h5>A</h5>
          </div>
          <div>
            <p>Name</p>
            <p>Email</p>
          </div>
        </div>
      </div>
      <div className="bg-cloud-burst-200 w-full h-auto my-5 p-3 rounded-[12px] ">
        <div className="flex items-center gap-4">
          <div className="bg-cloud-burst-500 w-[30px] h-[30px] flex justify-center items-center text-white rounded-full">
            <h5>A</h5>
          </div>
          <div>
            <p>Name</p>
            <p>Email</p>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-5">
        See More
        <img src={rightArrowIcon} alt="right arrow" />
      </button>
    </div>
  );
};
export default RecentCustomer;
