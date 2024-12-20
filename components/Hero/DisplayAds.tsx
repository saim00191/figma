import React from "react";

const DisplayAds = () => {
  return (
    <div className="mt-2">
      <div className="w-full h-auto bg-red-200">
        <div className="container bg-gray-900 h-[82px] overflow-hidden flex items-center justify-between">
          {/* Main Ad Container */}
          <div className="bg-red-800 w-[1181px] h-[82px] flex items-center justify-center">
            <div className="bg-slate-600 h-[82px] w-[602px] flex items-center justify-center text-white">
              df
            </div>
          </div>
          {/* Secondary Ad Container */}
          <div className="w-[236px] bg-green-800 h-[180px] flex items-center justify-center text-white">
            Secondary Ad
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAds;
