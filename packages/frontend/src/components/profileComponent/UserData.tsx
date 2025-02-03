import { useSelector } from 'react-redux';
import { emailUser, nameUser } from '../../features/user/userSelector';

const UserData = () => {
  const name = useSelector(nameUser);
  const email = useSelector(emailUser);
  return (
    <>
      <div>Name:{name}</div>
      <div>Email:{email}</div>
    </>
  );
};

export default UserData;
