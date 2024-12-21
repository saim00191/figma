import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import Image1 from "@/public/assets/MobileResponsiveImg1.png";
import Image2 from "@/public/assets/MobileResponsiveImg2.png";
import Image3 from "@/public/assets/MobileResponsiveImg3.png";
import Image4 from "@/public/assets/MobileResponsiveImg4.png";
import Image5 from "@/public/assets/MobileResponsiveImg5.png";

const images = [
  {id :1  , image :Image1},
  {id :2  , image :Image2},
  {id :3  , image :Image3},
  {id :4  , image :Image4},
  {id :5  , image :Image5},
];

const Footer = () => {
  return (
    <div className=" py-6 m-auto max-w-[1440px] px-4 md:px-6">
      <div className="flex items-center justify-between w-full h-full">
        <Image src={Logo} alt="Logo" className="w-[35px] h-[35px]" />
        <div className="flex sm:gap-[16px] gap-[10px] items-center">
          {images.map((item) => (
            <div key={item.id} className="h-[40px] w-[40px] items-center flex justify-center bg-[#111736] cursor-pointer rounded-full ">
              <Image src={item.image} alt="Icons" className="h-[15px] w-[15px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
