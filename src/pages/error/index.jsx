import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Link to={"/"} className="m-2  text-[25px] md:text-[30px] underline">
        {" "}
        Balik ke home{" "}
      </Link>
      <div className="flex flex-col justify-center items-center h-[88vh] text-center">
        <img
          src="https://error404.fun/img/illustrations/10@2x.png"
          alt="Error image"
          width={300}
        />
        <h2 className="text-cloud-burst-500 text-[42px]">404 NOT FOUND</h2>
        <h3 className="text-cloud-burst-500 text-[28px]">
          Waduh, URL yang dituju gak ketemu nih bro!
        </h3>
      </div>
    </>
  );
};
export default Error;
