import { NavLink, Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <NavLink to="/profile">Profile</NavLink>
      <Outlet />;
    </>
  );
};

export default Layout;
