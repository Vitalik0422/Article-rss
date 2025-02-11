import { useEffect } from 'react';
// import RssUrlList from '../../components/profileComponent/RssUrlList';
import UserData from '../../components/profileComponent/UserData';

const Profile = () => {
  useEffect(() => {
    console.log('Profile mounted');
    return () => console.log('Profile unmounted');
  }, []);
  return (
    <>
      <UserData />
      {/* <RssUrlList /> */}
    </>
  );
};

export default Profile;
