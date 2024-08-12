import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-white py-6 px-6">
      <div className="flex justify-between ">
        <div className=" flex flex-col justify-start items-center">
          <div className="flex">
            <h1 className="text-6xl bg-blue-900 font-bold px-1 mx-1 ">Sumit</h1>
            <h1 className="text-6xl text-blue-900 font-bold">Yadav</h1>
          </div>
          <div className="">
            <h1 className="text-black font-bold">
              ──TAX | Legal | Registrations | Accounting──
            </h1>
          </div>
        </div>

        <div className="flex justify-start space-x-4  items-center">
          <h1 className="text-blue-950 font-extrabold">
            <div className="flex">
              <div>📞</div>
              8851505094
            </div>
          </h1>
          <h1 className="text-blue-950 font-extrabold">
            <div className="flex">
              <div>✉️</div> Welcome@casumityadav.com
            </div>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
