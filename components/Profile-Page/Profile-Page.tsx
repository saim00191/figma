
import ProfileResponsive from "./Profile-Responsive";
import DesktopProfile from "./Desktop-Profile";
const ProfilePage = () => {
  

  return (
    <>
      <div className="block mdl:hidden">
      <ProfileResponsive/>
      </div>
      <div className="hidden mdl:block">
        <DesktopProfile/>
    </div>
    </>
  );
};

export default ProfilePage;
