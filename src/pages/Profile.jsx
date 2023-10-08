import Navigation from "../components/Navigation";
import UserProfile from "../components/UserProfile";
import style from '../styles/profile.module.css'

const Profile = () => {

  return (
    <div className={style.profileContainer}>
      <header>
        <nav>
          <Navigation />
        </nav>
        <UserProfile/>
      </header>
    </div>
  );
};

export default Profile;
