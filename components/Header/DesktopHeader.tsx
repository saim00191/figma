import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import User from "@/public/assets/userImg.png";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const navItems = [
  { name: "Home", href: "/" },
  { name: "Recent Calls", href: "/recent-calls" },
  { name: "Follow up calls", href: "/follow-up-calls" },
  { name: "Token Stats", href: "/token-stats" },
];

const DesktopHeader = () => {
  return (
    <div className="bg-[#111736]">
      <div className="max-w-[1440px] px-4 md:px-[24px]  mx-auto md:bg-[#111736] text-white h-[72px] flex items-center justify-between">
        <div className="flex">
          <div className="w-[54px] h-[54px]">
            <Image
              src={Logo}
              alt="Logo"
              width={54}
              height={54}
              className="w-full h-full"
            />
          </div>

          <ul className="md:flex items-center gap-[20px] pl-4 sm:pl-[20px] mdl:pl-[50px] lg:pl-[90px] py-4 w-full hidden">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`${inter.className} text-[#FFFFFF]/50 hover:text-white text-[14px] lg:text-[14px] mdl:text-[16px] leading-normal font-normal cursor-pointer`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href={"/pricing-page"}
            className={`${inter.className} hidden w-[160px] lg:w-[175px]  h-[40px] lg:flex items-center cursor-pointer text-[#6E62E5] font-medium text-[12px] lg:text-[14px] leading-normal justify-center gap-[10px]  p-[10px] rounded-[6px] bg-[#6E62E529] `}
          >
            Pricing Page
          </Link>
          <div className=" h-[24px]  flex-shrink-0 lg:hidden">
            <Link href={'/pricing-page'}>
              <CiMoneyCheck1  className="text-[26px] text-[#6E62E5]"/>
              </Link>
          </div>
          <div className=" h-[24px]  flex-shrink-0">
            <Link href={'/influencer-individual-stats'}>
            <IoBarChartOutline className="text-[26px] text-[#6E62E5]" />
            </Link>
          </div>
          <div className="  h-[24px] flex-shrink-0">
           <IoNotifications className="text-[26px] text-[#6E62E5]"/>
          </div>
          <Link href={"/profile-page"}>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
