import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import User from "@/public/assets/userImg.png";
import MenuIcon from '@/public/assets/hamburger.png'
const MobileHeader = () => {
  return (
    <div className='h-[55px] w-full container flex   items-center justify-between bg-[#111736]'>
      <div className='w-[44px] h-[44px] rounded-full'>
          <Image src={User} alt="User" />
      </div>
      <div className='w-[54px] h-[54px] '>
          <Image src={Logo} alt="User" />
      </div>
      <div className='w-[28px] h-[28px] '>
          <Image src={MenuIcon} alt="MenuIcon" />
      </div>
    </div>
  )
}

export default MobileHeader