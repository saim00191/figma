import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import User from "@/public/assets/userImg.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DesktopHeader = () => {
  return (
    <div className="bg-[#111736]">
      <div className="max-w-[1440px] px-4 md:px-[24px]  mx-auto md:bg-[#111736] text-white h-[72px] flex items-center justify-between">
      <div className="flex">
      <div className="w-[54px] h-[54px]">
  <Image src={Logo} alt="Logo" width={54} height={54} className="w-full h-full" />
</div>

        <ul className="md:flex items-center gap-[20px] pl-4 sm:pl-[20px] mdl:pl-[50px] lg:pl-[90px] py-4 w-full hidden">
          {["Home", "Recent Calls", "Follow up calls", "Token Stats"].map(
            (item, index) => (
              <li
                key={index}
                className={`${inter.className} text-[#FFFFFF] text-[12px] lg:text-[14px] sm:text-[16px] leading-normal font-normal cursor-pointer`}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <button
          className={`${inter.className} hidden w-[160px] lg:w-[175px]  h-[40px] lg:flex items-center cursor-pointer text-[#6E62E5] font-medium text-[12px] lg:text-[14px] leading-normal justify-center gap-[10px]  p-[10px] rounded-[6px] bg-[#6E62E529] `}
        >
          Pricing Page
        </button>
        <div className=" h-[24px]  flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
              fill="#6E62E5"
            />
          </svg>
        </div>
        <div className="  h-[24px] flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 22C13.6 22 14.5 21.1 14.5 20H10.5C10.5 21.1 11.4 22 12.5 22ZM19 16V10.5C19 7.43 16.87 4.86 14 4.18V3.5C14 2.67 13.33 2 12.5 2C11.67 2 11 2.67 11 3.5V4.18C8.13 4.86 6 7.43 6 10.5V16L4 18V19H21V18L19 16Z"
              fill="#6E62E5"
            />
            <circle cx="20" cy="4" r="4" fill="#F9837C" />
          </svg>
        </div>
        <div className=" h-[32px] gap-2 flex-shrink-0 flex items-center justify-between">
          <Image
            src={User}
            alt="User"
            className="rounded-full w-[32px] h-[32px]"
          />
          <div className="flex flex-col justify-between">
            <h5
              className={`${inter.className} text-[14px] text-[#F1F1F1] leading-normal font-medium`}
            >
              Solemn Captain
            </h5>
            <h6
              className={`${inter.className} text-[12px] text-[#BCBCBC] leading-normal font-normal`}
            >
              Admin
            </h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DesktopHeader;
