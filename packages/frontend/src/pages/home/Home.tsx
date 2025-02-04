import { NavLink } from 'react-router';
const Home = () => {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default Home;
